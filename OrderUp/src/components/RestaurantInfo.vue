<template>
    <div class="restaurantCard">
        <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
        <div class="content">
            <p class="mainText">
                {{restName}}
            </p>
            <p class="delprice"> Delivery Price: ${{price}}</p>
            <router-link class="menu" :to="'/restaurant/' + id">
                See Menu
            </router-link>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
export default{
    name: 'RestaurantInfo',
    props: {
        restName: String,
        price: String,
        id: String,
    }
}
</script>

<style lang="scss">

.restaurantCard{
    border: 1px solid rgb(238, 238, 238);
    border-radius: 20px;
    margin-bottom: 20px;
    width: 100px;
    width: 400px;
}
.restaurantCard img{
    width: 100%;
    border-radius: 20px;
}
.restaurantCard .content{
    padding: 20px 40px ;
}

.restaurantCard .content .mainText{
    font-weight: 600;
    color:#9f0000;;
    font-size: 1.5em;
}
.restaurantCard .content .delprice{
    font-size: 10pt;
    color:rgb(41, 107, 71)
}
.restaurantCard .content .menu{
    color:rgb(41, 107, 71)
}
</style>