import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const instance = axios.create({
  // baseURL: 'http://127.0.0.1:8080',
  baseURL: 'http://127.0.0.1:4523/m1/2727895-0-default',
  timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const identification = window.localStorage.getItem('identification')
    if (identification) {
      config.headers['Authorization'] = 'Bearer ' + identification
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (config) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const identification = config.headers.authorization
    if (identification) {
      window.localStorage.setItem('identification', identification)
    }
    return config.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance
