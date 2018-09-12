declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.css' {
  const styles: any;
  export = styles;
}
