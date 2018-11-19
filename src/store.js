import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const SET_USER_INFO = 'SET_USER_INFO';
const SET_TOKEN = 'SET_TOKEN';
const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
const SET_OPTIONS = 'SET_OPTIONS';

export default new Vuex.Store({
  state: {
    options: null,
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
    // 用户登录信息
    token: JSON.parse(localStorage.getItem('token')) || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
  },
  mutations: {
    [SET_USER_INFO](s, userInfo) {
      s.userInfo = userInfo;
    },
    [SET_TOKEN](s, token) {
      s.token = token;
    },
    [SET_LOGIN_STATUS](s, status) {
      s.loginStatus = status;
    },
    [SET_OPTIONS](st, options) {
      st.options = options;
    },
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      commit(SET_USER_INFO, userInfo);
    },
    setToken({ commit }, token) {
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('loginStatus', true);
      commit(SET_TOKEN, token);
      commit(SET_LOGIN_STATUS, true);
    },
    setSignOut({ commit }) {
      localStorage.removeItem('loginStatus');
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      commit(SET_LOGIN_STATUS, false);
      commit(SET_TOKEN, {});
    },
    setOptions({ commit }, options) {
      commit(SET_OPTIONS, options);
    },
  },
});
