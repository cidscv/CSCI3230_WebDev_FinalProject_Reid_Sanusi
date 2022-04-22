<template>
    <div id="header">
        <div id="title">
            Order Up
        </div>
        <div id="profile">
            <a href="/account">Owen Reid</a> 
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
    width: 100%;
    background-color: black;
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}

#title {
    font-size: 50px;
    color: white;
    text-align: left;
    padding: 25px;
}

#profile {
    a{
        text-decoration: none;
        font-size: 20px;
        color: white;
    }
    a:hover{
        cursor: pointer;
    }
    
    text-align: right;
    padding: 25px;
}
</style>