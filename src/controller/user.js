const {exec, escape} = require('../utils/mysql');

const login = async (username, password) => {
  username = escape(username);
  password = escape(password);

  const sql = `SELECT * FROM user WHERE username = ${username} AND password = ${password}`;
  const rows = await exec(sql);
  return rows[0] || {};
}

module.exports = {
  login
};
