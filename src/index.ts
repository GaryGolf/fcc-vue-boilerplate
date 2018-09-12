import Vue from 'vue';
import Hello from './components/hello.vue';
import Component from 'vue-class-component';

// new Vue({
//  render: createElement => createElement(Hello)
// }).$mount('#app');

// new Vue({
//   el: '#app',
//   components: {
//     Hello
//   }
// })

// @Component({
//   components: {
//     Hello
//   }
// })
@Component
class App extends Vue {
  mounted () {
    console.log('mounted')
  }
}

export const app = new App().$mount('#app');