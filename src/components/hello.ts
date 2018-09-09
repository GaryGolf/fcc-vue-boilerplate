import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
  template: '<button @click="onClick">Click!</button>'
})
export default class Hello extends Vue {
  message: string = 'hello!';
  onClick = ():void =>  window.alert(this.message);
}