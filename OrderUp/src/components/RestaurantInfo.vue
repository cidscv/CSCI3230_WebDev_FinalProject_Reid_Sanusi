<template>
    <div id="rest">
        <div id="name">
            McDonalds | $1.99
        </div>
        <div id="photo">
            <img alt="Mcphoto" src="../assets/mcphoto.png" class="mcphoto"/>
        </div>
    </div>
</template>

<script>
export default{
    name: 'RestaurantInfo'
}
</script>

<style lang="scss">

#rest {
    border: 1px solid black;
}

#name {
    font-size: 20px;
}

img {
    padding: 20px;
    height: 200px;
}
</style>