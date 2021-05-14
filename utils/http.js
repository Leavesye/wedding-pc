import axios from 'axios';
import { Loading, Message } from 'element-ui';
import store from 'store';
import router from './router';

const http = axios.create({
  baseURL: '',
  timeout: 20000,
});

let loading;
let timeout;
const delay = 200;

http.interceptors.request.use(
  config => {
    const token = store.get('token');

    if (token) {
      config.headers.Authorization = token;
    }

    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    timeout = setTimeout(() => {
      loading = Loading.service({
        fullscreen: true,
        text: '请求中...',
      });
    }, delay);

    return config;
  },
  err => Promise.reject(err),
);

http.interceptors.response.use(
  response => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    if (loading) {
      loading.close();
    }

    return response.data.data;
  },
  err => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }

    if (loading) {
      loading.close();
    }

    if (err.response.status === 403) {
      Message({
        message: '登录失效，请重新登录',
        type: 'error',
      });
      return router.push('/login');
    }

    if (err.response.status !== 200) {
      Message({
        message: err.response.data.msg,
        type: 'error',
      });
      return Promise.reject(err.response.data.msg);
    }

    return Promise.reject(err);
  },
);

export default http;
