<template>
    <div class="restaurantPage">
        <div class="filter">
            <h1>Filter</h1>
            <a v-on:click="noFilter" href="#">All</a>
            <div class="cat"
                    :class="{ active: index == currentIndex }"
                    v-for="(menuitem, index) in menu"
                    :key="index"
                >
                    <a v-on:click="filterByCat(menuitem.cat)" href="#">{{menuitem.cat}}</a>
            </div>
        </div>
        <div class="resthead">
            <div class="restNameInfo">
                <h1>{{currentRestaurant.restName}}</h1>
                <p>{{currentRestaurant.address}}</p>
                <p>{{currentRestaurant.number}}</p>
            </div>
            <div class="restaurants">
                <div class="menuitem"
                    :class="{ active: index == currentIndex }"
                    v-for="(menuitem, index) in menu"
                    :key="index"
                >
                    <MenuItem :menuname="menuitem.item" :price="menuitem.price" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuItem from "./MenuItem.vue"
import RestaurantDataService from "../services/RestaurantDataService";

export default{
    name: 'RestaurantPage',
    components: {
        MenuItem
    },
    data() {
        return {
            menu: [],
            allmenu: [],
            currentRestaurant: "",
            currentMenuItem: "",
            currentIndex: -1,
            route: this.$route,
            message: ''
        };
  },
  methods: {
    getRestaurant(id) {
      RestaurantDataService.get(id)
        .then(response => {
          this.currentRestaurant = response.data;
          this.menu = response.data.menu;
          this.allmenu = response.data.menu;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMenuItem(menuitem, index) {
      this.currentMenuItem = menuitem;
      this.currentIndex = index;
      console.log(this.currentMenuItem);
    },
    filterByCat(cat) {
        for (var i = 0; i <= this.allmenu.length; i++) {
            console.log(this.allmenu[i].cat);
            console.log(cat);
            if (this.allmenu[i].cat != cat) {
                this.menu.splice(i);
            }
        }
    },
    noFilter() {
        this.getRestaurant(this.$route.params.id);
    }
  },
  mounted() {
    this.message = '';
    console.log("working")
    this.getRestaurant(this.$route.params.id);
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

.restaurantCard .content{
    padding: 20px 40px ;
}


.restaurantPage{
    display: grid;
    grid-template-columns: 1fr 9fr;
}
.restaurantPage .filter{
    display: flex;
    background-color: #f7f7f7;
    padding: 10px 30px;
    flex-direction: column;
}
.restaurantPage .filter h1{
    font-variant: small-caps;
    font-size: 1.5em;
    color: #59da38;
}
.restaurantPage .filter a{
    margin-top: 15px;
    color: #296b47;
    text-decoration: none;
    
}
.restaurantPage .filter a:hover{
    color: #0F4900;
}
.restaurantPage .filter a:active{
    color: #0F4900;
}
.restaurantPage .restNameInfo {
    padding: 20px 40px;
}
</style>