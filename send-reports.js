// =================================================================
// IMPORTS Y CONFIGURACIÓN INICIAL
// =================================================================
import dotenv from 'dotenv'
dotenv.config()

import axios from 'axios'
import { createTransport } from 'nodemailer'
import dayjs from 'dayjs'
import { createClient } from '@supabase/supabase-js'
import { scryptSync, createDecipheriv } from 'crypto'
import { generateEmailReport } from './email_report.js'

// =================================================================
// CONSTANTES Y CLIENTES
// =================================================================
const TODAY = dayjs()
// Para el reporte semanal, es mejor obtener la semana pasada completa.
const START_DATE = TODAY.subtract(1, 'week').startOf('week')
const END_DATE = TODAY.subtract(1, 'week').endOf('week')

// Cliente de Supabase (¡Usa la Service Role Key!)
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY // <-- MUY IMPORTANTE
const supabase = createClient(supabaseUrl, supabaseKey)

// =================================================================
// FUNCIONES DE CIFRADO
// =================================================================
const ENCRYPTION_SECRET = process.env.ENCRYPTION_SECRET 
const decrypt = ({ text }) => {
  if (!text) return null
  try {
    const key = scryptSync(ENCRYPTION_SECRET, 'salt', 32)
    const iv = Buffer.alloc(16, 0) // IV debe ser el mismo que al encriptar
    const decipher = createDecipheriv('aes-256-cbc', key, iv)
    let decrypted = decipher.update(text, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  } catch (error) {
    console.error('Error al desencriptar:', error.message)
    return null
  }
}

/**
 * NUEVA FUNCIÓN: Obtiene las tareas completadas para un cliente en el rango de fechas.
 * @param {string} clientEmail - El email del cliente.
 */
async function getSupportTasks(clientEmail) {
  console.log(`Buscando tareas para ${clientEmail} entre ${START_DATE.format('YYYY-MM-DD')} y ${END_DATE.format('YYYY-MM-DD')}`)
  const { data: tasks, error } = await supabase
    .schema('api')
    .from('tareas_clientes')
    .select('title')
    .eq('client_email', clientEmail)
    // Opcional: filtrar por estado si es necesario. Ej: .eq('status', 1) para completadas
    .gte('created_at', START_DATE.toISOString())
    .lte('created_at', END_DATE.toISOString())

  if (error) {
    console.error(`Error al obtener tareas para ${clientEmail}:`, error.message)
    // Devolvemos un array vacío en caso de error para no detener el reporte
    return []
  }

  return tasks || []
}

// =================================================================
// FUNCIONES DE API (Reciben las keys como parámetros)
// =================================================================
async function getUptime(apiKey) {
  const res = await axios.post('https://api.uptimerobot.com/v2/getMonitors', {
    api_key: apiKey,
    format: 'json',
    custom_uptime_ratios: '7',
  })

  const monitor = res.data.monitors[0]
  if (!monitor) return 'Uptime this month: Data not available'

  const uptimeRatio = monitor.custom_uptime_ratio || 'N/A'
  //   return `Uptime this month: ${uptimeRatio}%`;
  return uptimeRatio
}

async function getUmamiStats(websiteId, apiKey) {
  const headers = { 'x-umami-api-key': apiKey }
  const startAt = START_DATE.valueOf()
  const endAt = END_DATE.valueOf()

  const res = await axios.get(`${process.env.UMAMI_API_URL}/websites/${websiteId}/stats`, {
    headers,
    params: { startAt, endAt },
  })

  const { pageviews, visitors, visits, bounces, totaltime } = res.data

  const pageviewsValue = pageviews?.value || 0
  const visitorsValue = visitors?.value || 0
  const visitsValue = visits?.value || 0
  const bouncesValue = bounces?.value || 0
  const totaltimeValue = totaltime?.value || 0

  const bounceRate = visitsValue > 0 ? (bouncesValue / visitsValue) * 100 : 0
  const avgVisitDuration = visitsValue > 0 ? totaltimeValue / visitsValue : 0

  //   return `
  // Website Analytics:
  // - Page Views: ${pageviewsValue}
  // - Unique Visitors: ${visitorsValue}
  // - Bounce Rate: ${bounceRate.toFixed(2)}%
  // - Avg. Visit Duration: ${Math.round(avgVisitDuration)} sec
  // `;
  return {
    pageviewsValue,
    visitorsValue,
    visitsValue,
    bouncesValue,
    totaltimeValue,
    bounceRate,
    avgVisitDuration,
  }
}

// =================================================================
// FUNCIÓN DE ENVÍO DE EMAIL (Recibe el email del destinatario)
// =================================================================
async function sendEmail(reportText, clientEmail) {
  const transporter = createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Site Report" <${process.env.EMAIL_USER}>`,
    to: clientEmail,
    subject: `Monthly Report - ${START_DATE.format('MMMM YYYY')}`,
    html: reportText,
  })
}

// =================================================================
// FUNCIÓN PRINCIPAL QUE ORQUESTA TODO (VERSIÓN OPTIMIZADA)
// =================================================================

/**
 * Procesa un único cliente: desencripta claves, obtiene datos, construye y envía el reporte.
 * @param {object} client - El objeto cliente de Supabase.
 */
async function processClientReport(client) {
  console.log(`--- Iniciando procesamiento para: ${client.client_fullname} > ${client.client_email} ---`)

  // 1. Desencriptar las credenciales
  const uptimeApiKey = decrypt({ text: client.uptime_ak })
  const umamiWebsiteId = decrypt({ text: client.umami_wi })
  const umamiApiKey = decrypt({ text: client.umami_ak })

  if (!uptimeApiKey || !umamiWebsiteId || !umamiApiKey) {
    // Lanzamos un error para que Promise.allSettled lo capture como 'rejected'
    throw new Error(`Faltan credenciales o no se pudieron desencriptar.`)
  }

  // 2. Obtener los datos de las APIs en paralelo
  const [uptime, umami] = await Promise.all([getUptime(uptimeApiKey), getUmamiStats(umamiWebsiteId, umamiApiKey)])

  // const supportItems = ['Image gallery updated on homepage.', 'Contact form validation fix.', 'Replaced broken Instagram link.']
  const supportItems = await getSupportTasks(client.client_email)
  const supportSummary = supportItems.map((item) => `<li>${item.title}</li>`).join('')
  const report = generateEmailReport({
    REPORT_PERIOD: `${START_DATE.format('DD MMMM YYYY')} - ${END_DATE.format('DD MMMM YYYY')}`,
    PAGE_VIEWS: umami.pageviewsValue,
    UNIQUE_VISITORS: umami.visitorsValue,
    BOUNCE_RATE: umami.bounceRate.toFixed(2),
    AVG_DURATION: umami.avgVisitDuration.toFixed(2),
    UPTIME_PERCENTAGE: uptime,
    SUPPORT_TASKS: supportSummary,
    GENERATION_DATE: TODAY.format('MMMM D, YYYY'),
  })

  // 4. Enviar el email
  await sendEmail(report, client.client_email)
}

async function processAllClients() {
  // Show current date and time
  // console.log(`Current date and time: ${new Date().toLocaleString()}`)
  console.log(`[${new Date().toLocaleString()}] - Iniciando proceso de generación de reportes...`)

  // 1. Obtener todos los clientes de la base de datos
  const { data: clients, error } = await supabase.schema('api').from('integraciones_cliente').select('*')

  if (error) {
    console.error('Error al obtener los clientes de Supabase:', error)
    return
  }

  if (!clients || clients.length === 0) {
    console.log('No se encontraron clientes para procesar.')
    return
  }

  console.log(`Se encontraron ${clients.length} clientes. Procesando en paralelo...`)

  // 2. Mapear cada cliente a una promesa que genera y envía su reporte
  const reportPromises = clients.map((client) => processClientReport(client))

  // 3. Ejecutar todas las promesas en paralelo con Promise.allSettled
  // Esto asegura que se procesen todos, incluso si algunos fallan.
  const results = await Promise.allSettled(reportPromises)

  // 4. Revisar los resultados
  results.forEach((result, index) => {
    const clientEmail = clients[index].client_email
    const clientName = clients[index].client_fullname
    if (result.status === 'fulfilled') {
      console.log(`✅ Reporte enviado exitosamente a ${clientName} > ${clientEmail}`)
    } else {
      console.error(`❌ Falló la generación del reporte para ${clientEmail}:`, result.reason.message || result.reason)
    }
  })

  console.log('--- Proceso de reportes finalizado. ---')
}
export function task() {
  processAllClients()
}
