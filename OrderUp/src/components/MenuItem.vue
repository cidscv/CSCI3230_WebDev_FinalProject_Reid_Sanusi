<template>
        <div class="restaurantCard">
            <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
            <div class="content">
                <p class="mainText">
                    {{menuname}}
                </p>
                <p class="metaText"> ${{price}}</p>
            </div>
        </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        menuname: String,
        price: String,
    },
}
</script>

<style lang="scss">

.restaurantCard .content .mainText{
    font-weight: 600;
    color:#9f0000;;
    font-size: 1.5em;
}
.restaurantCard .content .metaText{
    font-size: 12pt;
    font-weight: 600;
    color:rgb(41, 107, 71)
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

</style>
