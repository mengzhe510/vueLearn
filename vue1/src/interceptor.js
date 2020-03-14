/*
 * @Author: your name
 * @Date: 2020-03-12 21:02:38
 * @LastEditTime: 2020-03-12 22:19:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/vueLearn/vue1/src/interceptor.js
 */
const axios = require('axios');
export default function (vm) {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem('login');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    // console.log('config', config)
    return config
  })
  // 响应拦截器
  // 参数1表示成功响应
  // 这里只关心失败响应
  axios.interceptors.response.use(null, err => {
    // console.log('1111', JSON.stringify(err))
    const {
      response = {}
    } = err;
    const {
      status
    } = response
    if (status === 401) { // 没有登录或者令牌过期
      // 清空vuex和localstorage
      vm.$store.dispatch("logout");
      // 跳转login
      vm.$router.push("/login");
    }
    return Promise.reject(err);
  });
}