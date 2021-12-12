import axios from 'axios'
import qs from 'qs'

// create an axios instance
export const service = axios.create({
  baseURL: 'http://localhost:8080', // api的base_url
  timeout: 3000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    const result = response.data
    return result
  },
  error => {
    return Promise.reject(error)
  }
)

export function post(url, params, config) {
  return service.post(url, qs.stringify(params), config)
}

export function postJson(url, data, config) {
  return service.post(url, data, config)
}

export function get(url, params) {
  return service.get(url, {
    params: params,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$get = get
    app.config.globalProperties.$post = postJson
    app.config.globalProperties.$postRow = post
  }
}
