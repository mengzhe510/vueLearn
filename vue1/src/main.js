import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import store from './store'
import interceptors from './interceptor';
Vue.config.productionTip = false

let newvue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
interceptors(newvue)