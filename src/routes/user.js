const router = require('koa-router')()
const {
  SuccessModel,
  ErrorModel
} = require('../model/res_model')
const {
  login
} = require('../controller/user')

router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
  const {
    username,
    password
  } = ctx.request.body;
  const data = await login(username, password);

  if (data.username) {
    // 设置 session
    ctx.session.username = data.username;

    ctx.body = new SuccessModel();
    return;
  }

  ctx.body = new ErrorModel('用户名或密码错误');
})

module.exports = router