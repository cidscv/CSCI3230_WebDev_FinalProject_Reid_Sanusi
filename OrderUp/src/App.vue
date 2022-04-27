<template>
<div class="app">
  <AppHeader v-if="$route.meta.header" />

  <router-view />
</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components:{
    AppHeader,
  }
}
</script>

<style lang="scss">
body{
    padding: 0 !important;
    margin: 0 !important;
}
#app {
  body{
    padding: 0;
    margin: 0;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
  
}
</style>
