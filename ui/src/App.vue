<template>
  <div>
    <h1>Sort by Frequency</h1>
    <SortByFrequency/>
  </div>
</template>

<script>
import SortByFrequency from './components/SortByFrequency.vue'

export default {
  name: 'App',
  components: {
    SortByFrequency
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>