import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('login') ? true : false
  },
  mutations: {
    login: (state, boolean) => {
      console.log('state.login', state.login)
      state.login = boolean
    }
  },
  actions: {
    login: ({
      commit
    }) => {
      commit('login', true)
      localStorage.setItem('login', true)
      return true
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