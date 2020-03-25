const mysql = require('mysql');
const { MYSQL_CONF } = require('../config/database');

// 创建连接对象
const connection = mysql.createConnection(MYSQL_CONF);

// 连接数据库
connection.connect();

// 执行 sql 语句
const exec = (sql) => {
  const promise = new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(result);
    })
  });

  return promise;
;}

// 转换 sql 攻击字符串
const escape = mysql.escape;

// 转换事件戳为数据库 datetime 格式
const toDateTime = (date) => {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

module.exports = {
  exec,
  escape,
  toDateTime
};
