<template>
    <div class="restaurants">
        <router-link to="/restaurant">
            <div class="restaurantCard">
                <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
                <div class="content">
                    <p class="mainText">
                        Restaurant name
                    </p>
                    <p class="metaText"> 120 John Dr, Oshawa ON</p>
                    <p class="descText"> Lorem ipsum dolor sit amet, officia fugiat laborum commodo nulla et veniam ullamco cupidatat nisi</p>
                </div>
            </div>
        </router-link>
        <router-link to="/restaurant">
            <div class="restaurantCard">
                <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
                <div class="content">
                    <p class="mainText">
                        Restaurant name
                    </p>
                    <p class="metaText"> 120 John Dr, Oshawa ON</p>
                    <p class="descText"> Lorem ipsum dolor sit amet, officia fugiat laborum commodo nulla et veniam ullamco cupidatat nisi</p>
                </div>
            </div>
        </router-link>
        <router-link to="/restaurant">
            <div class="restaurantCard">
                <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
                <div class="content">
                    <p class="mainText">
                        Restaurant name
                    </p>
                    <p class="metaText"> 120 John Dr, Oshawa ON</p>
                    <p class="descText"> Lorem ipsum dolor sit amet, officia fugiat laborum commodo nulla et veniam ullamco cupidatat nisi</p>
                </div>
            </div>
        </router-link>
        <router-link to="/restaurant">
            <div class="restaurantCard">
                <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
                <div class="content">
                    <p class="mainText">
                        Restaurant name
                    </p>
                    <p class="metaText"> 120 John Dr, Oshawa ON</p>
                    <p class="descText"> Lorem ipsum dolor sit amet, officia fugiat laborum commodo nulla et veniam ullamco cupidatat nisi</p>
                </div>
            </div>
        </router-link>
        <router-link to="/restaurant">
            <div class="restaurantCard">
                <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
                <div class="content">
                    <p class="mainText">
                        Restaurant name
                    </p>
                    <p class="metaText"> 120 John Dr, Oshawa ON</p>
                    <p class="descText"> Lorem ipsum dolor sit amet, officia fugiat laborum commodo nulla et veniam ullamco cupidatat nisi</p>
                </div>
            </div>
        </router-link>
        <router-link to="/restaurant">
            <div class="restaurantCard">
                <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
                <div class="content">
                    <p class="mainText">
                        Restaurant name
                    </p>
                    <p class="metaText"> 120 John Dr, Oshawa ON</p>
                    <p class="descText"> Lorem ipsum dolor sit amet, officia fugiat laborum commodo nulla et veniam ullamco cupidatat nisi</p>
                </div>
            </div>
        </router-link>
        <router-link to="/restaurant">
            <div class="restaurantCard">
                <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
                <div class="content">
                    <p class="mainText">
                        Restaurant name
                    </p>
                    <p class="metaText"> 120 John Dr, Oshawa ON</p>
                    <p class="descText"> Lorem ipsum dolor sit amet, officia fugiat laborum commodo nulla et veniam ullamco cupidatat nisi</p>
                </div>
            </div>
        </router-link>
        <router-link to="/restaurant">
            <div class="restaurantCard">
                <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
                <div class="content">
                    <p class="mainText">
                        Restaurant name
                    </p>
                    <p class="metaText"> 120 John Dr, Oshawa ON</p>
                    <p class="descText"> Lorem ipsum dolor sit amet, officia fugiat laborum commodo nulla et veniam ullamco cupidatat nisi</p>
                </div>
            </div>
        </router-link>
    </div>

</template>

<script>

export default{
    name: 'RestaurantPage'
  
}
</script>

<style lang="scss">

.restaurants{
    padding: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
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
.restaurants a{
    text-decoration: none;
}

.restaurantCard .content .mainText{
    font-weight: 600;
    color:#9f0000;;
    font-size: 1.5em;
}
.restaurantCard .content .metaText{
    font-size: 10pt;
    color:rgb(41, 107, 71)
}
.restaurantCard .content .descText{
    color:rgb(41, 107, 71)
}
</style>