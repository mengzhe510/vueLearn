import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import store from './store'
import router from './router'
import {createAPI} from 'cube-ui'
import CartAnim from '@/components/CartAnimate';
import create from './utils/create'


Vue.config.productionTip = false
// 给vue注册实例方法，方法名$createCartAnim
createAPI(Vue, CartAnim, ['transitionend'])
Vue.prototype.$create = create;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
