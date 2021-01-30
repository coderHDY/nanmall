import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
