import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "./components/common/toast";
import FastClick from "fastclick"
import VueLazyload from "vue-lazyload"

Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
//toast挂件
Vue.use(toast)
// 解决300ms延迟
FastClick.attach(document.body)
// 图片懒加载
Vue.use(VueLazyload,
  {
    loading: require("./assets/img/common/placeholder.png")
  })
const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
