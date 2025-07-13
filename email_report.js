export function generateEmailReport(data) {
  const body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Weekly Website Performance Report</title>
<!--[if mso]>
    <nxml:namespace xmlns:nxml="urn:schemas-microsoft-com:office:office" />
    <nxml:namespace xmlns:w="urn:schemas-microsoft-com:office:word" />
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; line-height: 1.6;">
<!-- Wrapper for email clients -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8fafc;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
<!-- Main container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
<!-- Header -->
                    <tr>
                        <td style="padding: 40px 40px 20px 40px; text-align: center; border-bottom: 1px solid #e2e8f0;">
                            <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #1e293b; letter-spacing: -0.025em;">
                                Weekly Performance Report
                            </h1>
                            <div style="margin: 12px 0 8px 0; font-size: 18px; font-weight: 600; color: #3b82f6;">
                                {{WEBSITE_URL}} <!-- e.g., "acmecompany.com" -->
                            </div>
                            <p style="margin: 0; font-size: 16px; color: #64748b;">
                                {{REPORT_PERIOD}} <!-- e.g., "December 2024" -->
                            </p>
                            <div style="margin: 8px 0 0 0; font-size: 14px; color: #6b7280;">
                                Prepared for: <span style="font-weight: 600; color: #374151;">{{CLIENT_FULLNAME}}</span>
                            </div>
                        </td>
                    </tr>
<!-- Report Explanation -->
                    <tr>
                        <td style="padding: 30px 40px 20px 40px;">
                            <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 0 6px 6px 0;">
                                <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #1e293b;">
                                    📈 About This Report
                                </h3>
                                <p style="margin: 0; font-size: 14px; color: #475569; line-height: 1.6;">
                                    This comprehensive weekly report provides insights into your website's performance, including visitor analytics, uptime monitoring, and technical support activities. We track key metrics to help you understand your online presence and identify opportunities for growth.
                                </p>
                            </div>
                        </td>
                    </tr>
<!-- Customer Portal Login Section -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #fafbfc; border-bottom: 1px solid #e2e8f0;">
                            <div style="text-align: center;">
                                <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                    💳 Account Management
                                </h2>
                                <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                                    Access your billing information, view invoices, update payment methods, and manage your subscription through our secure customer portal.
                                </p>
<!-- Customer Portal Button -->
                                <div style="margin: 0 auto;">
<!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://billing.stripe.com/p/login/4gw03N22a8G4ejK8ww" style="height:48px;v-text-anchor:middle;width:240px;" arcsize="13%" stroke="f" fillcolor="#3b82f6">
                                        <w:anchorlock/>
                                        <center style="color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:600;">Customer Portal Login</center>
                                    </v:roundrect>
                                    <![endif]-->
<!--[if !mso]><!-->
                                    <a href="https://billing.stripe.com/p/login/4gw03N22a8G4ejK8ww" target="_blank" onclick="trackPortalLogin()"
class="portal-button"
style="display: inline-block;
                                               background-color: #3b82f6;
                                               color: #ffffff;
                                               text-decoration: none;
                                               padding: 14px 32px;
                                               border-radius: 6px;
                                               font-size: 16px;
                                               font-weight: 600;
                                               letter-spacing: 0.025em;
                                              transition: all 0.2s ease;
                                              box-shadow: 0 2px 4px rgba(59, 130, 246, 0.15);
                                              border: 2px solid #3b82f6;">
                                        <span style="display: inline-flex; align-items: center; gap: 8px;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
                                                <path d="M12 2C13.1046 2 14 2.89543 14 4V6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8C4 6.89543 4.89543 6 6 6H10V4C10 2.89543 10.8954 2 12 2ZM12 4V6H12V4ZM6 8V18H18V8H6ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" fill="currentColor"/>
                                            </svg>
                                            Customer Portal Login
                                        </span>
                                    </a>
<!--<![endif]-->
                                </div>
                                <p style="margin: 16px 0 0 0; font-size: 12px; color: #94a3b8;">
                                    Secure access powered by Stripe • Available 24/7
                                </p>
                            </div>
                        </td>
                    </tr>
<!-- Website Support Meeting Section -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #f8fffe; border-bottom: 1px solid #e2e8f0;">
                            <div style="text-align: center;">
                                <h2 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                    🔧 Website Support & Modification Meeting
                                </h2>
                                <p style="margin: 0 0 16px 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                                    Want to make changes or improvements to your website?
                                </p>
                                <div style="background-color: #ffffff; border: 1px solid #d1fae5; border-radius: 6px; padding: 20px; margin: 0 0 20px 0; text-align: left;">
                                    <p style="margin: 0 0 12px 0; font-size: 14px; color: #059669; font-weight: 600;">
                                        This meeting is exclusively for clients with an active hosting subscription.
                                    </p>
                                    <p style="margin: 0 0 16px 0; font-size: 14px; color: #475569; line-height: 1.5;">
                                        We can discuss content updates, design tweaks, functionality changes, or resolve any technical questions you may have about your site.
                                    </p>
                                    <div style="margin: 0 0 16px 0;">
                                        <p style="margin: 0 0 8px 0; font-size: 14px; color: #059669; font-weight: 600;">
                                            ✅ This session is ideal for:
                                        </p>
                                        <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px;">
                                            <li style="margin-bottom: 4px;">Requesting small modifications</li>
                                            <li style="margin-bottom: 4px;">Resolving functionality questions</li>
                                            <li style="margin-bottom: 4px;">Scheduling larger future tasks</li>
                                        </ul>
                                    </div>
                                    <div style="background-color: #fef3c7; border: 1px solid #fbbf24; border-radius: 4px; padding: 12px;">
                                        <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 600;">
                                            ⚠️ Important: This meeting does not include live implementations or extensive tasks during the call.
                                        </p>
                                    </div>
                                </div>
<!-- Billing Disclosure -->
                                <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px; margin: 0 0 24px 0; text-align: left;">
                                    <div style="display: flex; align-items: flex-start; gap: 8px;">
                                        <div style="flex-shrink: 0; margin-top: 2px;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="#64748b"/>
                                            </svg>
                                        </div>
                                        <div style="flex: 1;">
                                            <p style="margin: 0 0 8px 0; font-size: 13px; color: #475569; font-weight: 600;">
                                                💰 Billing Information
                                            </p>
                                            <p style="margin: 0 0 8px 0; font-size: 13px; color: #475569; line-height: 1.5;">
                                                <strong>Small modifications</strong> may be billed separately unless you have our <strong>Unlimited Modifications Add-on</strong> included in your plan.
                                            </p>
                                            <p style="margin: 0; font-size: 13px; color: #475569; line-height: 1.5;">
                                                <strong>Structural changes</strong> and <strong>major modifications</strong> are always billed separately, regardless of your current plan.
                                            </p>
                                        </div>
                                    </div>
                                </div>
<!-- Schedule Meeting Button -->
                                <div style="margin: 0 auto;">
<!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:48px;v-text-anchor:middle;width:280px;" arcsize="13%" stroke="f" fillcolor="#10b981">
                                        <w:anchorlock/>
                                        <center style="color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:600;">Schedule Support Meeting</center>
                                    </v:roundrect>
                                    <![endif]-->
<!--[if !mso]><!-->
                                    <a href="https://cal.carlosduri.com/duricarlos/soporte-sitio-web?duration=30" target="_blank" onclick="trackMeetingSchedule()"
class="meeting-button"
style="display: inline-block;
                                               background-color: #10b981;
                                               color: #ffffff;
                                               text-decoration: none;
                                               padding: 14px 32px;
                                               border-radius: 6px;
                                               font-size: 16px;
                                               font-weight: 600;
                                               letter-spacing: 0.025em;
                                              transition: all 0.2s ease;
                                              box-shadow: 0 2px 4px rgba(16, 185, 129, 0.15);
                                              border: 2px solid #10b981;">
                                        <span style="display: inline-flex; align-items: center; gap: 8px;">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
                                                <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H12V15H7V10Z" fill="currentColor"/>
                                            </svg>
                                            Schedule Support Meeting
                                        </span>
                                    </a>
<!--<![endif]-->
                                </div>
                                <p style="margin: 16px 0 0 0; font-size: 12px; color: #94a3b8;">
                                    Available for active hosting clients • 30-minute consultation
                                </p>
                            </div>
                        </td>
                    </tr>
<!-- Website Analytics Section -->
                    <tr>
                        <td style="padding: 10px 40px 30px 40px;">
                            <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                📊 Website Analytics
                            </h2>
<!-- Metrics Grid -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
<!-- Page Views -->
                                    <td style="width: 50%; padding: 0 10px 20px 0; vertical-align: top;">
                                        <div style="background-color: #f1f5f9; border-radius: 6px; padding: 20px; text-align: center;">
                                            <div style="font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">
                                                {{PAGE_VIEWS}} <!-- e.g., "12,543" -->
                                            </div>
                                            <div style="font-size: 14px; color: #64748b; font-weight: 500;">
                                                Page Views
                                            </div>
                                        </div>
                                    </td>
<!-- Unique Visitors -->
                                    <td style="width: 50%; padding: 0 0 20px 10px; vertical-align: top;">
                                        <div style="background-color: #f1f5f9; border-radius: 6px; padding: 20px; text-align: center;">
                                            <div style="font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">
                                                {{UNIQUE_VISITORS}} <!-- e.g., "3,421" -->
                                            </div>
                                            <div style="font-size: 14px; color: #64748b; font-weight: 500;">
                                                Unique Visitors
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
<!-- Bounce Rate -->
                                    <td style="width: 50%; padding: 0 10px 0 0; vertical-align: top;">
                                        <div style="background-color: #f1f5f9; border-radius: 6px; padding: 20px; text-align: center;">
                                            <div style="font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">
                                                {{BOUNCE_RATE}}% <!-- e.g., "42.3%" -->
                                            </div>
                                            <div style="font-size: 14px; color: #64748b; font-weight: 500;">
                                                Bounce Rate
                                            </div>
                                        </div>
                                    </td>
<!-- Average Visit Duration -->
                                    <td style="width: 50%; padding: 0 0 0 10px; vertical-align: top;">
                                        <div style="background-color: #f1f5f9; border-radius: 6px; padding: 20px; text-align: center;">
                                            <div style="font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 4px;">
                                                {{AVG_DURATION}}s <!-- e.g., "156s" -->
                                            </div>
                                            <div style="font-size: 14px; color: #64748b; font-weight: 500;">
                                                Avg. Visit Duration
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
<!-- Uptime Section -->
                    <tr>
                        <td style="padding: 0 40px 30px 40px;">
                            <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                ⚡ Uptime Status
                            </h2>
                            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 20px;">
                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                    <div style="flex: 1;">
                                        <div style="font-size: 18px; font-weight: 600; color: #166534; margin-bottom: 4px;">
                                            {{UPTIME_PERCENTAGE}}% <!-- e.g., "99.98%" -->
                                        </div>
                                        <div style="font-size: 14px; color: #15803d;">
                                            Uptime this month
                                        </div>
                                    </div>
                                    <div style="width: 40px; height: 40px; background-color: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                        <span style="color: white; font-size: 20px;">✓</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
<!-- Support Summary Section -->
                    <tr>
                        <td style="padding: 0 40px 30px 40px;">
                            <h2 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #334155;">
                                🛠️ Support Summary
                            </h2>
                            <div style="background-color: #fefce8; border: 1px solid #fde047; border-radius: 6px; padding: 20px;">
                                <div style="font-size: 16px; font-weight: 600; color: #a16207; margin-bottom: 12px;">
                                    Completed Tasks:
                                </div>
                                <ul style="margin: 0; padding-left: 20px; color: #92400e;">
                                    {{SUPPORT_TASKS}} <!-- Dynamic list items -->
                                </ul>
                            </div>
                        </td>
                    </tr>
<!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px 40px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0 0 12px 0; font-size: 14px; color: #64748b;">
                                This report was automatically generated on {{GENERATION_DATE}}
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                                If you have any questions about this report, please don't hesitate to contact us at <a href="mailto:support@carlosduri.com" style="color: #3b82f6; text-decoration: none;">support@carlosduri.com</a>.
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
                padding: 20px !important;
            }
.mobile-text {
                font-size: 14px !important;
            }
.mobile-metric {
                font-size: 24px !important;
            }
/* Mobile button styles */
.portal-button, .meeting-button {
                padding: 12px 24px !important;
                font-size: 14px !important;
            }
        }
/* Hover effects for web clients that support them */
@media screen and (min-width: 600px) {
.portal-button:hover {
                background-color: #2563eb !important;
                transform: translateY(-1px);
                box-shadow: 0 4px 8px rgba(59, 130, 246, 0.25) !important;
            }
.meeting-button:hover {
                background-color: #059669 !important;
                transform: translateY(-1px);
                box-shadow: 0 4px 8px rgba(16, 185, 129, 0.25) !important;
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
