
const router = require('koa-router')()
const {SuccessModel, ErrorModel} = require('../../model/res_model')
const {
  get,
  add,
  del,
  update
} = require('../../controller/table')

router.prefix('/api/equipment_spec_maintain')

router.get('/list', async (ctx, next) => {
  const data = await get('equipment_spec_maintain', ctx.query);
  ctx.body = data ? new SuccessModel(data, 'succeeded') : new ErrorModel('failed');
})

router.post('/add', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await add({
    tableName: 'equipment_spec_maintain',
    tableForm: ctx.request.body,
    idKey: 's_maintain_id',
    createTimeKey: 's_maintain_create_time'
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('添加成功') : new ErrorModel('添加失败');
})

router.put('/update', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await update({
    tableName: 'equipment_spec_maintain',
    tableForm: ctx.request.body,
    idKey: 's_maintain_id',
    editTimeKey: 's_maintain_event_time'
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('更新成功') : new ErrorModel('更新失败');
})

router.delete('/del', async (ctx) => {
  const id = ctx.query.id;
  const result = await del('equipment_spec_maintain', 's_maintain_id', id);
  ctx.body = result.affectedRows > 0 ? new SuccessModel('删除成功') : new ErrorModel('删除失败');
})

module.exports = router;
    