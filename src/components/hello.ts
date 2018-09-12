import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class Hello extends Vue {
  message: string = 'hello!';
  onClick = ():void =>  window.alert(this.message);
}