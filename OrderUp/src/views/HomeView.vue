<template>
  <div class="home">
    this is the home page yeah
  </div>
</template>

<script>
import HomeInfo from "../components/HomeInfo.vue"

export default {
  name: 'HomeView',
  components: {
    HomeInfo
  }
}
</script>

<style scoped lang="scss">
.home{
  margin: 1rem;
}
</style>
