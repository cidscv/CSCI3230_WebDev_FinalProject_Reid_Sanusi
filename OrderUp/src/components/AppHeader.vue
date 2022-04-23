<template>
    <div id="header">
        <div id="title">
            <a href="/">Order Up</a>
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
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}

#title {
    font-size: 50px;
    text-align: left;
    padding: 25px;

    a{
        text-decoration: none;
        color: white;
    }
    a:hover{
        cursor: pointer;
    }
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