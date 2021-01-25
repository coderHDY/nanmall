import axios from "axios"
import Vue from "vue";

Vue.prototype.axios = axios

export function homeRequset(config) {
  let instance1 = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return instance1(config)
}
