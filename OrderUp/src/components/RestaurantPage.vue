<template>
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

    <div id="menu">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
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
            currentRestaurant: "",
            message: ''
        };
  },
  methods: {
    getRestaurant(id) {
      RestaurantDataService.get(id)
        .then(response => {
          this.currentRestaurant = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
    a{
        text-decoration: none;
        color: white;
    }
    a:hover{
        cursor: pointer;
    }
}

#cat {
    padding-left: 20px;
}

#menu {
    display: flex;
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
}
</style>