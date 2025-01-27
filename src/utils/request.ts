import axios from 'axios'
// import router from '@/router'

const httpRequest = axios.create({
  // baseURL: `http://${serverIp}:port`,
  baseURL: 'http://localhost:8081',
  timeout: 30000,
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
httpRequest.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8'
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : null
    if (user && !config.headers?.skipToken) {
      config.headers['token'] = user.token // 设置请求头
      config.headers['Authorization'] = `Bearer ${user.token}` // 设置请求头
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// response 拦截器
// 可以在接口响应后统一处理结果
httpRequest.interceptors.response.use(
  (response) => {
    let res = response.data
    // 兼容服务端返回的JSON字符串数据
    if (
      typeof res === 'string' &&
      response.headers['Content-Type'] === 'application/json;charset=utf-8'
    ) {
      res = res ? JSON.parse(res) : res
    }
    // 当权限验证不通过的时候给出提示
    if (res.code === '401') {
      alert('权限不足请登录')
      //   router.push('/sign')
    }
    return res
  },
  (error) => {
    console.log('err' + error) // for debug
    if (error.message === 'Request failed with status code 401') {
      alert('权限不足请登录')
      //   router.push('/sign')
    }
    return Promise.reject(error)
  },
)

export default httpRequest
