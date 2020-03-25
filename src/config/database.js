const env = process.env.NODE_ENV;
const PRD_HOST = '';
const DEV_HOST = '127.0.0.1';

const MYSQL_CONF = {
  host: env === 'dev' ? DEV_HOST : PRD_HOST,
  port: '3306',
  user: 'root',
  password: '19981229',
  database: 'MESv'
};
const REDIS_CONF = {
  host: env === 'dev' ? DEV_HOST : PRD_HOST,
  port: '6379'
};

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
};