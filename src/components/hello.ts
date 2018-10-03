import { Vue, Component, Emit } from 'vue-property-decorator';

@Component 
export default class Hello extends Vue {
  private message: string = 'Hello Vue!';
  private disabled: boolean = false;

  onClick = ():void => {
    this.disableButton(true);
    setTimeout(() => { 
      this.disableButton(false) 
      this.setMessage('Привет Вуй!');
    }, 2000);
  }
  @Emit() private setMessage(message: string):void { this.message = message };
  @Emit() private disableButton(value: boolean):void { this.disabled = value };
}