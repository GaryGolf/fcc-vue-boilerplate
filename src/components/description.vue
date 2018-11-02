<template>
  <div>
    <pre>{{ message }}</pre>
    <button @click="this.$store.commit('change')">
      Change
    </button>
  </div>
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
