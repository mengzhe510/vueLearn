import Vue from 'vue'
import Vuex from 'vuex'
import server from '../server/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('login') ? true : false
  },
  mutations: {
    login: (state, boolean) => {
      console.log('state.login', state.isLogin)
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
})