
const router = require('koa-router')()
const {SuccessModel, ErrorModel} = require('../../model/res_model')
const {
  get,
  add,
  del,
  update
} = require('../../controller/table')

router.prefix('/api/equipment_file')

router.get('/list', async (ctx, next) => {
  const data = await get('equipment_file', ctx.query);
  ctx.body = data ? new SuccessModel(data, 'succeeded') : new ErrorModel('failed');
})

router.post('/add', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await add({
    tableName: 'equipment_file',
    tableForm: ctx.request.body,
    idKey: 'equipment_file_id',
    createTimeKey: ''
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('添加成功') : new ErrorModel('添加失败');
})

router.put('/update', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await update({
    tableName: 'equipment_file',
    tableForm: ctx.request.body,
    idKey: 'equipment_file_id',
    editTimeKey: ''
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('更新成功') : new ErrorModel('更新失败');
})

router.delete('/del', async (ctx) => {
  const id = ctx.query.id;
  const result = await del('equipment_file', 'equipment_file_id', id);
  ctx.body = result.affectedRows > 0 ? new SuccessModel('删除成功') : new ErrorModel('删除失败');
})

module.exports = router;
    