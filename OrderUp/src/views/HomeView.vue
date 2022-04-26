<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by name"
          v-model="restName"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <h4>Restaurants List</h4>
    <div class="rests">
      <div class="rest"
          :class="{ active: index == currentIndex }"
          v-for="(restaurant, index) in restaurants"
          :key="index"
          @click="setActiveRestaurant(restaurant, index)"
        >
          <RestaurantInfo :restName="restaurant.restName" :price="restaurant.price" />
      </div>
    </div>
      <div v-if="currentRestaurant">
        <h4>Restaurant</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentRestaurant.restName }}
        </div>
        <div>
          <label><strong>Price:</strong></label> {{ currentRestaurant.price }}
        </div>
        <a class="badge badge-warning"
          :href="'/restaurants/' + currentRestaurant.id"
        >
          See Menu
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Restaurant...</p>
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

<style scoped lang="scss">

.rests{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    align-items: baseline;
    margin: 0 auto;
}
.home{
  margin: 1rem;
  font-size: 20px;
}

td {
  padding: 35px;
}
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

</style>
