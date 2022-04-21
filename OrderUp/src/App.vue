<script>
import AppHeader from './components/AppHeader.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components:{
    AppHeader,
    HomeView
}
}
</script>

<template>
  <AppHeader />
  <HomeView />
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
