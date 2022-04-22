<template>
  <div class="home">
    List of Restaurants
  </div>
  <table>
    <tr>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
    </tr>
    <tr>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
    </tr>
        <tr>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
      <td>
        <RestaurantInfo />
      </td>
    </tr>
  </table>
</template>

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
