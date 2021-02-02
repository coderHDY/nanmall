import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}
const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Cart = () => import('views/cart/Cart.vue');
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
    component: Cart,
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
  // mode: 'history' //需要其他配置
})
//router中定义的方法
router.afterEach((to, from) => {
  if (to.matched[0] && document.title != to.matched[0].meta.title) {
    document.title = to.matched[0].meta.title
  }
})
export default router
