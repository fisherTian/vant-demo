import './common/rem';
import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
