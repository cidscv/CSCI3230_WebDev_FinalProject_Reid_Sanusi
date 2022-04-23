<template>
    <div id="header">
        <div id="restinfo">
            <img alt="Mcphoto" src="../assets/mcphoto.png" class="mcphoto"/>
            <p id="restname">
                McDonalds
            </p>
        </div>
        <div id="nav">
            <a href="/mcdonalds" id="cat">Burgers</a>
            <a href="/mcdonalds" id="cat">Drinks</a>
            <a href="/mcdonalds" id="cat">Chicken</a>
            <a href="/mcdonalds" id="cat">Snacks</a>
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
import MenuItem from "../components/MenuItem.vue"
export default{
    name: 'RestaurantPage',
    components: {
        MenuItem
  }
}
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