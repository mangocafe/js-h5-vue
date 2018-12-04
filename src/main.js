import 'amfe-flexible';
import Vue from 'vue';
import Cube from 'cube-ui';
import FastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Cube);
// 添加Fastclick移除移动端点击延迟
FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
