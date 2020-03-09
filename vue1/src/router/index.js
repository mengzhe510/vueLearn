/*
 * @Author: your name
 * @Date: 2020-03-09 13:08:01
 * @LastEditTime: 2020-03-09 14:05:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/vueLearn/vue1/src/router/index.js
 */
import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(vueRouter)
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/about',
  meta: {
    isneed: true
  },
  component: () => import('../views/About.vue')
}, {
  path: '/login',
  component: () => import('../views/Login.vue')
}]
const router = new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.isneed) {
    const islogin = localStorage.getItem('login');
    console.log('islogin', islogin)
    if (islogin) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  } else {
    next()
  }
})
export default router