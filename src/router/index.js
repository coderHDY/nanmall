import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Cert = () => import('views/cert/Cert.vue');
const Me = () => import('views/me/Me.vue');
const routes = [
  {
    path: '/',
    redirect: "/Home"
  }, {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页"
    }
  }, {
    path: '/Category',
    name: 'Category',
    component: Category,
    meta: {
      title: "分类"
    }
  }, {
    path: '/Cert',
    name: 'Cert',
    component: Cert,
    meta: {
      title: "购物车"
    }
  }, {
    path: '/Me',
    name: 'Me',
    component: Me,
    meta: {
      title: "我的"
    }
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
//router中定义的方法
router.beforeEach((to, from, next) => {
  if (document.title != to.matched[0].meta.title) {
    document.title = to.matched[0].meta.title
  }
  next()
})
export default router
