<template>
  <div class="home">
    List of Restaurants
  </div>
  <div class="rests">
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
  </div>
</template>

<style>

.rests{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    align-items: baseline;
    margin: 0 auto;
}

</style>
<script>
import HomeInfo from "../components/HomeInfo.vue"
import RestaurantInfo from "../components/RestaurantInfo.vue"

export default {
  name: 'HomeView',
  components: {
    HomeInfo,
    RestaurantInfo
  }
}
</script>

<style scoped lang="scss">
.home{
  margin: 1rem;
  font-size: 20px;
}

td {
  padding: 35px;
}

</style>
