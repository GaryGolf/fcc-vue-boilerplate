<template>
  <pre>{{ message }}</pre>
</template>
  
<script lang="ts" >
  export default {
    name: 'qq-description',
    data() {
      return {
        message:  'Привет'
      }
    }
  }
</script>
<style>
pre {
  color: greenyellow;
}
</style>

