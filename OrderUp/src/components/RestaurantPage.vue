<template>
<div class="restaurant">
    <div id="header">
        <div id="restinfo">
            <img alt="Mcphoto" src="../assets/mcphoto.png" class="mcphoto"/>
            <p id="restname">
                {{currentRestaurant.restName}}
            </p>
        </div>
        <div id="nav">
            <p id="cat">Burgers</p>
            <p id="cat">Drinks</p>
            <p id="cat">Chicken</p>
            <p id="cat">Snacks</p>
        </div>
    </div>

    <div class="menu">
        <div class="menuitem"
            :class="{ active: index == currentIndex }"
            v-for="(menuitem, index) in menu"
            :key="index"
            @click="setActiveMenuItem(menuitem, index)"
        >
            <MenuItem :menuname="menuitem.item" :price="menuitem.price" />
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
            currentRestaurant: "",
            currentMenuItem: "",
            currentIndex: -1,
            message: ''
        };
  },
  methods: {
    getRestaurant(id) {
      RestaurantDataService.get(id)
        .then(response => {
          this.currentRestaurant = response.data;
          this.menu = response.data.menu;
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
    }
  },
  mounted() {
    this.message = '';
    this.getRestaurant(this.$route.params.id);
  }
}; 

</script>

<style lang="scss">

#header {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

#restinfo {
    display: flex;
    flex-direction: row;
}

#restname {
    font-size: 20px;
    color: white;
    padding: 20px;
}

.mcphoto {
    width: 100px;
    height: 100px;
}

#nav {
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 25px;
    display: flex;
    flex-direction: row;
    p{
        text-decoration: none;
        color: white;
    }
    p:hover{
        cursor: pointer;
    }
}

#cat {
    padding-left: 20px;
}

#menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    align-items: baseline;
    margin: 0 auto;
}
</style>