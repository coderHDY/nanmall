import Toast from "./Toast";

const obj = {}
obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  // 2.注册对象
  const toast = new toastConstructor();
  // 3.手动挂载到某一个元素上 );
  toast.$mount(document.createElement("div"))
  // 挂在后toast.$el就是我们创建的元素
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
}
export default obj
