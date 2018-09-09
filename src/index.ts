import Vue from 'vue';
import Hello from './components/hello';

new Vue({
 render: createElement => createElement(Hello)
}).$mount('#app');