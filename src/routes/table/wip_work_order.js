
const router = require('koa-router')()
const {SuccessModel, ErrorModel} = require('../../model/res_model')
const {
  get,
  add,
  del,
  update
} = require('../../controller/table')

router.prefix('/api/wip_work_order')

router.get('/list', async (ctx, next) => {
  const data = await get('wip_work_order', ctx.query);
  ctx.body = data ? new SuccessModel(data, 'succeeded') : new ErrorModel('failed');
})

router.post('/add', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await add({
    tableName: 'wip_work_order',
    tableForm: ctx.request.body,
    idKey: 'wo_id',
    createTimeKey: 'wo_create_time'
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('添加成功') : new ErrorModel('添加失败');
})

router.put('/update', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await update({
    tableName: 'wip_work_order',
    tableForm: ctx.request.body,
    idKey: 'wo_id',
    editTimeKey: 'wo_event_time'
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('更新成功') : new ErrorModel('更新失败');
})

router.delete('/del', async (ctx) => {
  const id = ctx.query.id;
  const result = await del('wip_work_order', 'wo_id', id);
  ctx.body = result.affectedRows > 0 ? new SuccessModel('删除成功') : new ErrorModel('删除失败');
})

module.exports = router;
    