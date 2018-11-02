import Vue from 'vue';
import Hello from './components/hello.vue';
import Vuex from 'vuex';

Vue.config.productionTip = false;

import { store } from './store'

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
  store,
  render: create => create(Hello)
}).$mount('#app')
