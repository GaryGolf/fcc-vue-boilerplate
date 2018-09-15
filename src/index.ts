import Vue from 'vue';
import Hello from './components/hello.vue';

Vue.config.productionTip = false;

new Vue({
  render: create => create(Hello)
}).$mount('#app')
