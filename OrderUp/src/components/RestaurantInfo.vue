<template>
    <div id="rest">
        <div id="name">
            <router-link  to="/">{{restName}} | ${{price}}</router-link> 
        </div>
        <div id="photo">
            <img alt="Mcphoto" src="../assets/mcphoto.png" class="mcphoto"/>
        </div>
    </div>
</template>

<script>
export default{
    name: 'RestaurantInfo',
    props: {
        restName: String,
        price: String,
    }
}
</script>

<style lang="scss">

#rest {
    border: 1px solid black;
}

#name {
    padding: 10px;
    a{
        text-decoration: none;
        font-size: 20px;
        color: black;
    }
    a:hover{
        cursor: pointer;
    }
}

.mcphoto {
    padding: 20px;
    height: 200px;
}
</style>