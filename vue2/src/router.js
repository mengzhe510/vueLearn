/*
 * @Author: your name
 * @Date: 2020-03-15 10:25:21
 * @LastEditTime: 2020-03-15 10:31:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vueLearn/vue2/src/router.js
 */
import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from './views/Home.vue';
Vue.use(vueRouter);
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/cart',
  component: () => import('./views/Cart.vue')
}, {
  path: '/me',
  component: () => import('./views/Me.vue')
}]
const router = new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router