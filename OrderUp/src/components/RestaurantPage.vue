<template>
    <div id="nav">
        <router-link style="text-decoration: none;" to="McDonalds"> Burgers </router-link>
        <router-link style="text-decoration: none;" to="McDonalds"> Drinks </router-link>
    </div>
</template>

<script>
export default{
    name: 'RestaurantPage'
}
</script>

<style lang="scss">
#nav {
    padding: 30px;
    font-weight: bold;
    font-size: 25px;
    word-spacing: 30px;

    .router-link-exact-active {
      color: #555555;
    }
}
</style>