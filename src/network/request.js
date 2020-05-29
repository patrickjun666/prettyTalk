import axios from 'axios'

export function request(config) {
  // 1:创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000',
    timeout: 5000
  })
  // 2.1:请求拦截
  instance.interceptors.request.use(config => {
    return config; //拦截器要将拦截的东西返回出去
  }, err => {
    console.log(err);
  })
  // 2.2:响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}