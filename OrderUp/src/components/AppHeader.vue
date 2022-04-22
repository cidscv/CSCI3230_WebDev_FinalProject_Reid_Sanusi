<template>
    <div id="header">
        <div id="title">
            Order Up
        </div>
        <div id="profile">
            Owen Reid
        </div>
    </div>
</template>

<script>
export default{
    name: 'AppHeader'
}
</script>

<style lang="scss">
#header {
    background-color: black;
    display: flex;
    flex-wrap: nowrap;
}

#title {
    font-size: 50px;
    color: white;
    text-align: left;
    padding: 25px;
    padding-right: 1500px;
}

#profile {
    font-size: 20px;
    color: white;
    text-align: right;
    padding: 25px;
}
</style>