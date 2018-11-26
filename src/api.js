import axios from 'axios';

axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = JSON.parse(token);
    }
    return config;
  },
  err => Promise.reject(err),
);

export default {
  getOptions() {
    return axios.get('/api/base/options');
  },
  register(params) { // 注册新用户
    return axios.post('/api/user/register', params);
  },
  login(params) { // 登录
    return axios.post('/api/user/login', params);
  },
  updatePassword(id, params) {
    return axios.put(`/api/user/${id}/password`, params);
  },
};
