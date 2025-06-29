export function generateAdminEmailReport(data) {
  const body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Consolidated Website Performance Report</title>
    <!--[if mso]>
    <nxml:namespace xmlns:nxml="urn:schemas-microsoft-com:office:office" />
    <nxml:namespace xmlns:w="urn:schemas-microsoft-com:office:word" />
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; line-height: 1.5;">
    <!-- Wrapper for email clients -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8fafc;">
        <tr>
            <td align="center" style="padding: 30px 15px;">
                <!-- Main container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="800" style="max-width: 800px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 30px 20px 30px; text-align: center; border-bottom: 2px solid #e2e8f0;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #1e293b; letter-spacing: -0.025em;">
                                📈 Admin Dashboard Report
                            </h1>
                            <p style="margin: 8px 0 0 0; font-size: 16px; color: #64748b;">
                                Consolidated Performance Summary • {{REPORT_DATE}}
                            </p>
                        </td>
                    </tr>

                    <!-- Summary Stats -->
                    <tr>
                        <td style="padding: 30px 30px 20px 30px;">
                            <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                📊 Overview Summary
                            </h2>
                            
                            <!-- Summary Grid -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="width: 25%; padding: 0 10px 15px 0; vertical-align: top;">
                                        <div style="background-color: #eff6ff; border-radius: 6px; padding: 16px; text-align: center; border-left: 4px solid #3b82f6;">
                                            <div style="font-size: 24px; font-weight: 700; color: #1e40af; margin-bottom: 4px;">
                                                {{TOTAL_CUSTOMERS}}
                                            </div>
                                            <div style="font-size: 12px; color: #1e40af; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                                                Total Customers
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td style="width: 25%; padding: 0 5px 15px 5px; vertical-align: top;">
                                        <div style="background-color: #f0fdf4; border-radius: 6px; padding: 16px; text-align: center; border-left: 4px solid #22c55e;">
                                            <div style="font-size: 24px; font-weight: 700; color: #15803d; margin-bottom: 4px;">
                                                {{TOTAL_PAGE_VIEWS}}
                                            </div>
                                            <div style="font-size: 12px; color: #15803d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                                                Total Page Views
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td style="width: 25%; padding: 0 5px 15px 5px; vertical-align: top;">
                                        <div style="background-color: #fefce8; border-radius: 6px; padding: 16px; text-align: center; border-left: 4px solid #eab308;">
                                            <div style="font-size: 24px; font-weight: 700; color: #a16207; margin-bottom: 4px;">
                                                {{TOTAL_VISITORS}}
                                            </div>
                                            <div style="font-size: 12px; color: #a16207; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                                                Total Visitors
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td style="width: 25%; padding: 0 0 15px 10px; vertical-align: top;">
                                        <div style="background-color: #fdf2f8; border-radius: 6px; padding: 16px; text-align: center; border-left: 4px solid #ec4899;">
                                            <div style="font-size: 24px; font-weight: 700; color: #be185d; margin-bottom: 4px;">
                                                {{OVERALL_UPTIME}}%
                                            </div>
                                            <div style="font-size: 12px; color: #be185d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                                                Avg Uptime (7d)
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Customer Performance Table -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                👥 Customer Performance Details
                            </h2>
                            
                            <!-- Responsive table wrapper -->
                            <div style="overflow-x: auto; border-radius: 8px; border: 1px solid #e2e8f0;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="min-width: 600px; background-color: #ffffff;">
                                    <!-- Table Header -->
                                    <thead>
                                        <tr style="background-color: #f8fafc;">
                                            <th style="padding: 16px 12px; text-align: left; font-size: 12px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                                                Customer
                                            </th>
                                            <th style="padding: 16px 12px; text-align: left; font-size: 12px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                                                Email
                                            </th>
                                            <th style="padding: 16px 12px; text-align: left; font-size: 12px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                                                Website URL
                                            </th>
                                            <th style="padding: 16px 12px; text-align: right; font-size: 12px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                                                Page Views
                                            </th>
                                            <th style="padding: 16px 12px; text-align: right; font-size: 12px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                                                Visitors
                                            </th>
                                            <th style="padding: 16px 12px; text-align: right; font-size: 12px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                                                Bounce Rate
                                            </th>
                                            <th style="padding: 16px 12px; text-align: right; font-size: 12px; font-weight: 600; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0;">
                                                Avg Duration
                                            </th>
                                        </tr>
                                    </thead>
                                    <!-- Table Body - Dynamic Content -->
                                    <tbody>
                                        {{CUSTOMER_ROWS}}
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>

                    <!-- Support Summary Section -->
                    <tr>
                        <td style="padding: 20px 30px;">
                            <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                🎫 Support Summary (Last 7 Days)
                            </h2>
                            
                            <div style="background-color: #f8fafc; border-radius: 8px; padding: 24px; border: 1px solid #e2e8f0;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 33.33%; padding-right: 20px; vertical-align: top;">
                                            <div style="text-align: center;">
                                                <div style="font-size: 32px; font-weight: 700; color: #22c55e; margin-bottom: 8px;">
                                                    {{TICKETS_RESOLVED}}
                                                </div>
                                                <div style="font-size: 14px; color: #64748b; font-weight: 500;">
                                                    Tickets Resolved
                                                </div>
                                            </div>
                                        </td>
                                        <!-- <td style="width: 33.33%; padding: 0 10px; vertical-align: top; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
                                            <div style="text-align: center;">
                                                <div style="font-size: 32px; font-weight: 700; color: #f59e0b; margin-bottom: 8px;">
                                                    {{TICKETS_PENDING}}
                                                </div>
                                                <div style="font-size: 14px; color: #64748b; font-weight: 500;">
                                                    Tickets Pending
                                                </div>
                                            </div>
                                        </td> -->
                                        <!-- <td style="width: 33.33%; padding-left: 20px; vertical-align: top;">
                                            <div style="text-align: center;">
                                                <div style="font-size: 32px; font-weight: 700; color: #3b82f6; margin-bottom: 8px;">
                                                    {{AVG_RESPONSE_TIME}}h
                                                </div>
                                                <div style="font-size: 14px; color: #64748b; font-weight: 500;">
                                                    Avg Response Time
                                                </div>
                                            </div>
                                        </td> -->
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>

                    <!-- Uptime Summary Section -->
                    <tr>
                        <td style="padding: 20px 30px 30px 30px;">
                            <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                ⚡ System Health Overview (Last 7 Days)
                            </h2>
                            
                            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 24px;">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="width: 50%; padding-right: 20px; vertical-align: top;">
                                            <div>
                                                <div style="font-size: 18px; font-weight: 600; color: #166534; margin-bottom: 12px;">
                                                    Overall System Status
                                                </div>
                                                <div style="font-size: 36px; font-weight: 700; color: #15803d; margin-bottom: 8px;">
                                                    {{OVERALL_UPTIME}}%
                                                </div>
                                                <div style="font-size: 14px; color: #15803d;">
                                                    Average uptime across all monitored sites
                                                </div>
                                            </div>
                                        </td>
                                        <td style="width: 50%; padding-left: 20px; vertical-align: top; border-left: 1px solid #bbf7d0;">
                                            <div>
                                                <div style="font-size: 16px; font-weight: 600; color: #166534; margin-bottom: 12px;">
                                                    Incident Summary
                                                </div>
                                                <ul style="margin: 0; padding-left: 20px; color: #15803d; font-size: 14px;">
                                                    {{INCIDENT_SUMMARY}}
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 30px 40px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b;">
                                Report generated automatically on {{GENERATION_TIMESTAMP}}
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                                This consolidated report covers {{TOTAL_CUSTOMERS}} active customers
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- Mobile-specific styles -->
    <style type="text/css">
        @media only screen and (max-width: 600px) {
            .mobile-padding {
                padding: 15px !important;
            }
            .mobile-text {
                font-size: 12px !important;
            }
            .mobile-metric {
                font-size: 20px !important;
            }
            .mobile-table {
                font-size: 12px !important;
            }
            .mobile-hide {
                display: none !important;
            }
        }
        
        @media only screen and (max-width: 480px) {
            .mobile-stack {
                display: block !important;
                width: 100% !important;
                padding: 0 0 15px 0 !important;
            }
        }
    </style>
</body>
</html>`
  // replace all the {{}} with the data
  function replaceTemplate(body, data) {
    const template = body.replace(/{{(.*?)}}/g, (_, key) => data[key])
    return template
  }

  return replaceTemplate(body, data)
}
