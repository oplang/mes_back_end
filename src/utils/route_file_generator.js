const {
  exec
} = require('./mysql');
const fs = require('fs');
const path = require('path');

// 获取数据库中所有表的表名数组
const getTableNameArr = async () => {
  // 获取数据库中所有的表
  const sql = `select table_name from information_schema.tables where table_schema='MESv'`;
  const tableName = await exec(sql);
  // 生成表名数组
  return tableName.map(item => item.table_name);
}

// 获取表的主键名、createTime 和 eventTime 的列名
getCreateAndEventTimeKey = (columnName) => {
  let createTimeKey = '';
  let eventTimeKey = '';

  columnName.forEach(item => {
    const colName = item.column_name
    if (colName.endsWith('_create_time')) {
      createTimeKey = colName;
    }

    if (colName.endsWith('_event_time')) {
      eventTimeKey = colName;
    }
  })

  return {
    createTimeKey,
    eventTimeKey
  };
}

// 创建 write stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '..', 'routes', 'table', fileName);
  console.log(fullFileName);
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'w'
  })
  return writeStream;
}

const generator = async () => {

  const tableNameArr = await getTableNameArr();

  tableNameArr.forEach(async (tableName) => {
    // 获取表的列名
    const sql = `select column_name from information_schema.columns where table_schema='MESv' and table_name='${tableName}';`
    const columnName = await exec(sql);

    // 获取 id 主键名
    const pkIdKey = columnName[0].column_name

    // 获取 createTime 和 eventTime 的列名
    const {
      createTimeKey,
      eventTimeKey
    } = getCreateAndEventTimeKey(columnName);

    // 创建写文件流
    const routeFileWriteStream = createWriteStream(tableName + '.js');

    // 根据表名创建路由文件并写入代码
    routeFileWriteStream.write(`
const router = require('koa-router')()
const {SuccessModel, ErrorModel} = require('../../model/res_model')
const {
  get,
  add,
  del,
  update
} = require('../../controller/table')

router.prefix('/api/${tableName}')

router.get('/list', async (ctx, next) => {
  const data = await get('${tableName}', ctx.query);
  ctx.body = data ? new SuccessModel(data, 'succeeded') : new ErrorModel('failed');
})

router.post('/add', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await add({
    tableName: '${tableName}',
    tableForm: ctx.request.body,
    idKey: '${pkIdKey}',
    createTimeKey: '${createTimeKey}'
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('添加成功') : new ErrorModel('添加失败');
})

router.put('/update', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await update({
    tableName: '${tableName}',
    tableForm: ctx.request.body,
    idKey: '${pkIdKey}',
    editTimeKey: '${eventTimeKey}'
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('更新成功') : new ErrorModel('更新失败');
})

router.delete('/del', async (ctx) => {
  const id = ctx.query.id;
  const result = await del('${tableName}', '${pkIdKey}', id);
  ctx.body = result.affectedRows > 0 ? new SuccessModel('删除成功') : new ErrorModel('删除失败');
})

module.exports = router;
    `);

    // 更新 user_routes.js
    userRoutesFileWriteStream = fs.createWriteStream(path.join(__dirname, '..', 'utils', 'use_routes.js'), {
      flags: 'a' // 写入方式（追加）
    });
    const camelTableName = tableName.replace(/_\w/g, item => item.slice(1).toUpperCase());
    userRoutesFileWriteStream.write(`
  // 导入使用 ${tableName}
  const ${camelTableName} = require('../routes/table/${tableName}');
  app.use(${camelTableName}.routes(), ${camelTableName}.allowedMethods())
    `)
  })
}

generator()