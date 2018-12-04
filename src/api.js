import axios from 'axios';

axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const api = axios.create();

axios.interceptors.request.use = api.interceptors.request.use;

api.interceptors.request.use(
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
    return api.get('/api/base/options');
  },
  register(params) { // 注册新用户
    return api.post('/api/user/register', params);
  },
  login(params) { // 登录
    return api.post('/api/user/login', params);
  },
  getUsers(params) {
    return api.post('/api/user/list', params);
  },
  updatePassword(id, params) {
    return api.put(`/api/user/${id}/password`, params);
  },
  updateUser(id, params) {
    return api.put(`/api/user/${id}`, params);
  },
  uploadPhoto(params) {
    return api.post('/api/base/upload', params);
  },
};
