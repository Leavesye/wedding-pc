import { Loading, Message } from 'element-ui'
import vuex from '@/store/index'
let loading
let timeout
const delay = 200
export default function ({ store, redirect, app: { $axios } }) {
  // 数据访问前缀
  $axios.defaults.baseURL = 'https://www.watabe-wedding.com.cn/api'
 // $axios.defaults.baseURL = 'http://127.0.0.1:8080/api'

  // request拦截器，我这里设置了一个token，当然你可以不要
  $axios.onRequest(config => {
    let token = store.state.token
    config.headers['Authorization'] = token
    timeout = setTimeout(() => {
      loading = Loading.service({
        fullscreen: true,
        text: '请求中...'
      })
    }, delay)
    // config.headers.common['X-Access-Token'] = store.state.token
  })
  $axios.onError(error => { })
  // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
  $axios.interceptors.response.use(response => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }

    if (loading) {
      loading.close()
    }
    if (response.data.result) {
      return response.data.msg
    }
  })
}
