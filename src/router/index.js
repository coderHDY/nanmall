import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Cert = () => import('views/cart/Cert.vue');
const Me = () => import('views/me/Me.vue');
const Detail = () => import('views/detail/Detail.vue');
const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cert,
    meta: {
      title: "购物车"
    }
  },
  {
    path: '/me',
    name: 'me',
    component: Me,
    meta: {
      title: "我的"
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      title: "商品详情"
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
