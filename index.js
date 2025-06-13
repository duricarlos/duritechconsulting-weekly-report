import cron from 'node-cron'
const schedule = '0 9 * * 1'

console.log('Iniciando Cron JOB:', schedule)

cron.schedule(schedule, './send-reports.js', {
  timezone: 'America/New_York',
})
