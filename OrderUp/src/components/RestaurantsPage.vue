<template>
    <div class="restaurants">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
        <div class="rests">
            <div class="rest"
                :class="{ active: index == currentIndex }"
                v-for="(restaurant, index) in restaurants"
                :key="index"
                @click="setActiveRestaurant(restaurant, index)"
            >
                <RestaurantInfo :restName="restaurant.restName" :price="restaurant.price" :id="restaurant.id" />
            </div>
        </div>

    </div>

</template>

<script>
import RestaurantDataService from "../services/RestaurantDataService"
import RestaurantInfo from "../components/RestaurantInfo.vue";

export default {
  name: 'HomeView',
  components: {
    RestaurantInfo
  },
  data() {
    return {
      restaurants: [],
      currentRestaurant: null,
      currentIndex: -1,
      restName: ""
    };
  },
  methods: {
    retrieveRestaurants() {
      RestaurantDataService.getAll()
        .then(response => {
          this.restaurants = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveRestaurants();
      this.currentRestaurant = null;
      this.currentIndex = -1;
    },
    setActiveRestaurant(restaurant, index) {
      this.currentRestaurant = restaurant;
      this.currentIndex = index;
    },
    removeAllRestaurants() {
      RestaurantDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      RestaurantDataService.findByRestName(this.restName)
        .then(response => {
          this.restaurants = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveRestaurants();
  }
};
</script>

<style lang="scss">

.restaurants{
    padding: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.rests{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    align-items: baseline;
    margin: 0 auto;
}

.rest {
    padding: 10px;
}

.restaurants a{
    text-decoration: none;
}
</style>