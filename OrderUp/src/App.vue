<template>
  <AppHeader v-if="$route.meta.header" />

  <router-view />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
