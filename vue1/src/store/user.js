/*
 * @Author: your name
 * @Date: 2020-03-14 09:48:57
 * @LastEditTime: 2020-03-14 09:52:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/vueLearn/vue1/src/store/user.js
 */
import server from '@/server/index'
export default {
  state: {
    isLogin: localStorage.getItem('login') ? true : false
  },
  mutations: {
    login: (state, boolean) => {
      state.isLogin = boolean
    }
  },
  actions: {
    login: ({
      commit
    }, user) => {
      return server.login(user).then(data => {
        const {
          code,
          token
        } = data.data;
        if (code == 1) {
          localStorage.setItem('login', token);
          commit('login', true)
        }
        return code
      })
    },
    logout: ({
      commit
    }) => {
      commit('login', false)
      localStorage.removeItem('login')
    }
  },
  modules: {}
}