import axios from "axios"
import Vue from "vue";

Vue.prototype.axios = axios

export function mainRequset(config) {
  let instance1 = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  })
  //拦截请求器
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // 拦截响应器
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  // 执行请求
  return instance1(config)
}
