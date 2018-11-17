import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('@/views/Home');
const Mine = () => import('@/views/Mine');

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
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
    },
  ],
});
