/*
 * @Author: your name
 * @Date: 2020-03-12 18:49:57
 * @LastEditTime: 2020-03-12 19:40:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/vueLearn/vue1/src/server/index.js
 */
import axios from 'axios';
export default {
  login(user) {
    return axios.get('/api/login', {
      params: user
    })
  }
}