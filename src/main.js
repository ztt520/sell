import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';
// import VueRouter from 'vue-router';
// import goods from './components/goods/goods.vue';

import 'common/stylus/index.styl';

Vue.use(VueResource);
// Vue.use(VueRouter);
//
// let app = Vue.extend(App);
// let router =new VueRouter;
// router.map({
//   'goods':{
//     component:goods
//   }
// })
// router.start(app,'#app')



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
