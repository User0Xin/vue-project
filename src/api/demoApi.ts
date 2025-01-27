import httpRequest from '@/utils/request'

export const demoApi = (obj: object) => {
  return httpRequest({
    url: '/demo',
    method: 'post',
    data: obj,
  })
}

export const demoBaiduApi = () => {
  return httpRequest({
    baseURL: 'www.baidu.com',
    method: 'get',
  })
}
