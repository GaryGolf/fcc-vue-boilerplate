import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello.vue';

Vue.use(VueRouter);

export const router = new VueRouter({ 
  routes: [
    { path: '', component: Hello }
  ],
  mode: 'history'
});