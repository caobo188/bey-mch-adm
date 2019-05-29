import axios from 'axios'
import { Message } from 'element-ui'
// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:8081/api', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求数据
let req = {}
// request interceptor
service.interceptors.request.use(
  config => {
  // do something before request is sent
    req = config
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    // return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (req.dataType === 'text' || req.dataType === 'html' || req.dataType === 'xml') {
      req.okCb && req.okCb(res)
    } else if (res.code === 200) {
      req.okCb && req.okCb(res)
    } else {
      // 正常请求，应用业务处理错误
      if (res.code === 301 || res.code === 302 || res.code === 700) {
        window.location.href = '/login'
      } else if (req.failCb) {
        req.failCb(res)
      } else {
        console.log('请求错误：', res.msg)
      }
    }
  },
  error => {
    console.log('err' + error) // for debug
    // return Promise.reject(error)
  }
)

export default service
