/*
 * @Author: your name
 * @Date: 2020-03-12 17:05:38
 * @LastEditTime: 2020-03-12 19:44:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/vueLearn/vue1/server/index.js
 */
const Koa = require('koa');
const KoaRouter = require('koa-router');
const jwt = require('jsonwebtoken');
const jwtAuth = require('koa-jwt');
const secret = 'this is a secret';
const app = new Koa();
const router = new KoaRouter();
router.get('/api/login', async ctx => {
  const {
    name,
    password
  } = ctx.query;
  if (name == '123' && password == '123') {
    const token = jwt.sign({
      data: {
        name: '123',
      },
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    }, secret);
    ctx.body = {
      code: 1,
      token,
      message:''
    }
  } else {
    ctx.status = 401;
    ctx.body = {
      code: 0,
      message:'用户名或密码错误'
    }
  }
})
app.use(router.routes());
app.listen(3000)