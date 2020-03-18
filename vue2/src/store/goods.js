/*
 * @Author: your name
 * @Date: 2020-03-15 11:03:14
 * @LastEditTime: 2020-03-18 20:14:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vueLearn/vue2/src/store/goods.js
 */
import service from '../service/goods';
export default {
  state: {
    slider: [],
    keys: [],
    goodsInfo: []
  },
  mutations: {
    setGoodsInfo(state, {
      slider,
      keys,
      goodsInfo
    }) {
      state.slider = slider;
      state.keys = keys;
      state.goodsInfo = goodsInfo;
    }
  },
  getters: {
    goods: state => {
      return state.keys.map(key => state.goodsInfo[key]).reduce((prev, next) => prev.concat(next), [])
    }
  },
  actions: {
    getGoods({
      commit,
      state
    }) {
      if (!state.keys.length) {
        // 没有数据采去获取
        service.getGoodsInfo().then(goodsInfo => {
          commit('setGoodsInfo', goodsInfo)
        })
      }
    }
  },
  modules: {}
}