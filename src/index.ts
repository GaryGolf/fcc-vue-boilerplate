import Vue from 'vue';
import Hello from './components/hello.vue';
import Component from 'vue-class-component';
import App from './index.vue';



console.log('qq');

new Vue({
  el: '#app',
  template: '<div>{{ hi }}</div>'
})



// @Component({
//   components: {
//     Hello
//   }
// })
// @Component
// class App extends Vue {
//   mounted () {
//     console.log('mounted')
//   }
// }

// export const app = new App().$mount('#app');