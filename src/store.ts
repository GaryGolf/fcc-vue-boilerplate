import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
  
export const store = new Vuex.Store({
  state: {
    message: 'hello'
  },
  mutations: {
    change (state) {
      state.message = 'hello vuex'
    }
  }
})

// if (module.hot) {
//   module.hot.accept(['./mutations'], () => {
//     const newMutations = require('./mutations').default;
//     store.hotUpdate({
//       mutations: newMutations
//     })
//   })
// }