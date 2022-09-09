const cron = require('node-cron');

console.log('시작됨~~~~~~~~~!');

cron.schedule('* * * * *', function () {
  console.log('매 분 마다 작업 실행 :', new Date().toString());
});
