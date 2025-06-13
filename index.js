import cron from 'node-cron';

cron.schedule('0 9 * * 1', './send-reports.js',{
  timezone: 'America/New_York',
});