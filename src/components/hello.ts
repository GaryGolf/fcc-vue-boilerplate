import { Vue, Component} from 'vue-property-decorator';

@Component export default class Hello extends Vue {
  message: string = 'hello!';
  onClick = ():void =>  window.alert(this.message);
}