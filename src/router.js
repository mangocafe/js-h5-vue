import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('@/views/Home');
const Mine = () => import('@/views/Mine');
const Login = () => import('@/views/Login');
const Register = () => import('@/views/Register');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { level: 1, isTab: true, title: '首页' },
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: { level: 1, isTab: true, title: '我的' },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { level: 1, isTab: false, title: '登录' },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { level: 2, isTab: false, title: '注册' },
    },
  ],
});
