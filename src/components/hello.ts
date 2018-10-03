import { Vue, Component, Emit } from 'vue-property-decorator';
import Description from './description.vue'

@Component({
  components: {
    qqDescription: Description
  }
})
export default class Hello extends Vue {
  private message: string = 'Hello Vue!';
  private disabled: boolean = false;

  private created() {
    console.log('hello component created');
  }

  private onClick():void {
    this.disabled = true;
    setTimeout(() => { 
      this.disabled = false;
      this.message = 'Привет Вуй!';
    }, 2000);
  }
  
}