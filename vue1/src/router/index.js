/*
 * @Author: your name
 * @Date: 2020-03-09 13:08:01
 * @LastEditTime: 2020-03-09 13:14:55
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
  component: () => import('../views/About.vue')
}]
const router = new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router