/*
 * @Author: your name
 * @Date: 2020-03-15 11:13:44
 * @LastEditTime: 2020-03-18 20:10:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vueLearn/vue2/src/service/goods.js
 */
import axios from 'axios';
export default {
  getGoodsInfo() {
    return axios.get('/api/goods').then(err => {
      const {
        code,
        data: goodsInfo,
        slider,
        keys
      } = err.data;
      if (code) {
        return {
          goodsInfo,
          slider,
          keys
        }
      } else {
        return null
      }
    })
  }
}