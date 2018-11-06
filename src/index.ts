import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Hello from './components/hello.vue';

Vue.config.productionTip = false;

import { store } from './store';
import { router } from './routes';

// const store = new Vuex.Store({
//   state: {
//     message: 'hello'
//   },
//   mutations: {
//     change (state) {
//       state.message = 'hello vuex'
//     }
//   }
// })

new Vue({
  store, router,
  // render: create => create(Hello)
}).$mount('#app')
