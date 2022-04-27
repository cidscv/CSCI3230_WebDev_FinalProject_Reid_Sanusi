<template>
        <div class="restaurantCard">
            <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
            <div class="content">
                <p class="mainText">
                    {{menuname}}
                </p>
                <p class="metaText"> ${{price}}</p>
                <button class="addToCart"> Add to Cart</button>
            </div>
        </div>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        menuname: String,
        price: String,
    }
}
</script>

<style lang="scss">


.burger {
    padding: 20px;
    height: 200px;
}
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
.restaurantCard .content .addToCart{
    color:white;
    background-color: green;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
}

.restaurantCard .content .addToCart:hover{
    background-color: rgb(17, 185, 17);
    cursor: pointer;
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
