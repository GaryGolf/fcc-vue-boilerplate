<template>
  <div :class="$style.example">{{ msg }}</div>
</template>

<script lang="ts">
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