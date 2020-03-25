const {
  exec,
  escape,
  toDateTime
} = require('../utils/mysql');
const {
  camelToUnderline,
  getUnderLineKeyForm,
  getCamelPropObj
} = require('../utils/table');

// 获取表格数据
const get = async (tableName, query) => {
  let sql = `SELECT * FROM ${tableName} WHERE `;

  if (JSON.stringify(query) !== '{}') { // 搜索
    const options = [];
    for (const key in query) {
      options.push(`${camelToUnderline(key)}='${query[key]}'`)
    }
    sql += `${options.join(' AND ')} AND `;
  }

  sql += 'is_valid = 1;';
  console.log(sql);
  const result = await exec(sql);
  return result.map(item => getCamelPropObj(item));
}

/**
 * 添加表格数据
 * tableForm 中不应该存在用户无权修改的属性
 */
const add = async ({
  tableName,
  tableForm,
  idKey,
  createTimeKey = ''
}) => {
  // 将表单属性名从驼峰格式转换为下划线格式
  tableForm = getUnderLineKeyForm(tableForm);
  console.log(tableForm);
  // 属性键值对数组
  const keyArr = [];
  const valArr = [];

  for (const key in tableForm) {
    if (key !== idKey) {
      keyArr.push(key);
      valArr.push(escape(tableForm[key]))
    }
  }

  if (createTimeKey !== '') {
    keyArr.push(createTimeKey);
    valArr.push(`'${toDateTime(new Date())}'`);
  }

  // 随机生成主键值
  const idVal = Date.now().toString() + Math.floor(Math.random() * 899999);

  // 拼接插入属性名、值字符串
  const props = `${idKey}, ${keyArr.join(', ')}`
  const values = `'${idVal}', ${valArr.join(`, `)}`;

  const sql = `INSERT INTO ${tableName} (${props}) VALUES (${values});`
  // return console.log(sql);
  const result = await exec(sql);
  return result;
}

/**
 * 更新表格数据
 * tableForm 中不应该存在用户无权修改的属性
 */
const update = async ({
  tableName,
  idKey,
  tableForm,
  editTimeKey = ''
}) => {
  // 将表单属性名从驼峰格式转换为下划线格式
  tableForm = getUnderLineKeyForm(tableForm);
  // 属性键值对数组
  const arr = [];

  for (const key in tableForm) {
    if (key !== idKey) {
      arr.push(`${key} = ${escape(tableForm[key])}`);
    }
  }

  if (editTimeKey !== '') {
    arr.push(`${editTimeKey} = '${toDateTime(new Date())}'`)
  }


  const sql = `UPDATE ${tableName} SET ${arr.join(', ')} WHERE ${idKey} = '${tableForm[idKey]}';`;
  const result = await exec(sql);
  return result;
}

// 删除表格数据
const del = async (tableName, idKey, idVal) => {
  // const sql = `DELETE FROM ${tableName} WHERE ${Array.isArray(idVal) ? idVal.map(item => `${idKey} = '${item}'`).join(' OR ') : `${idKey} = '${idVal}'`};`;
  const sql = `UPDATE ${tableName} SET is_valid = 0 WHERE ${Array.isArray(idVal) ? idVal.map(item => `${idKey} = '${item}'`).join(' OR ') : `${idKey} = '${idVal}'`};`
  console.log(sql);

  const result = await exec(sql);
  return result;

}

module.exports = {
  get,
  add,
  del,
  update
};