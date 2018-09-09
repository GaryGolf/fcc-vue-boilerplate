<template>
  <div :class="$style.example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style module>
.example {
  color: red;
}
</style>