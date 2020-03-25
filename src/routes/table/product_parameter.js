
const router = require('koa-router')()
const {SuccessModel, ErrorModel} = require('../../model/res_model')
const {
  get,
  add,
  del,
  update
} = require('../../controller/table')

router.prefix('/api/product_parameter')

router.get('/list', async (ctx, next) => {
  const data = await get('product_parameter', ctx.query);
  ctx.body = data ? new SuccessModel(data, 'succeeded') : new ErrorModel('failed');
})

router.post('/add', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await add({
    tableName: 'product_parameter',
    tableForm: ctx.request.body,
    idKey: 'prod_param_id',
    createTimeKey: ''
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('添加成功') : new ErrorModel('添加失败');
})

router.put('/update', async (ctx) => {
  // 前端 POST 回的表单中需要有对应 parentId 的键值对，以及 createUser 的键值对
  const result = await update({
    tableName: 'product_parameter',
    tableForm: ctx.request.body,
    idKey: 'prod_param_id',
    editTimeKey: ''
  });
  ctx.body = result.affectedRows > 0 ? new SuccessModel('更新成功') : new ErrorModel('更新失败');
})

router.delete('/del', async (ctx) => {
  const id = ctx.query.id;
  const result = await del('product_parameter', 'prod_param_id', id);
  ctx.body = result.affectedRows > 0 ? new SuccessModel('删除成功') : new ErrorModel('删除失败');
})

module.exports = router;
    