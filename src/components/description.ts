import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  props: {
    title: { type: String, default: 'Motor' }
  }
})
export default class Description extends Vue {
  // @Prop(String) title:string;
  title:string = '';

  // private comments  = `Ниже представлена диаграмма жизненного цикла экземпляра. 
  // Необязательно понимать её полностью прямо сейчас, но по мере изучения и практики 
  // разработки к ней полезно будет обращаться.`;

}