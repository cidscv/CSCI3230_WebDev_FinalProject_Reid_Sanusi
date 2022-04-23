<template>
    <div id="header">
        <div id="restinfo">
            <img alt="Mcphoto" src="../assets/mcphoto.png" class="mcphoto"/>
            <p id="restname">
                McDonalds
            </p>
        </div>
        <div id="nav">
            <div id="cat">Burgers</div>
            <div id="cat">Drinks</div>
            <div id="cat">Chicken</div>
            <div id="cat">Snacks</div>
        </div>
    </div>

</template>

<script>
export default{
    name: 'RestaurantPage'
}
</script>

<style lang="scss">

#header {
    background-color: black;
    display: flex;
    flex-direction: column;
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
    color: white;
    font-size: 25px;
    display: flex;
    flex-direction: row;
}

#cat {
    padding-left: 20px;
}
</style>