<template>
    <div id="item">
        <img src="../assets/burger.jpg" alt="menu-pic" class="burger">
        <div id="itemname">
            Big Mac Extra Value Meal [710-1140 Cals]
        </div>
        <div id="price">
            $11.49
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuItem',
}
</script>

<style lang="scss">
#item {
    border: 1px solid black;
}

#itemname {
    padding: 10px;
    font-size: 20px;
    color: black;
    text-align: left;

}

#price {
    text-align: left;
    padding-left: 10px;
    padding-bottom: 10px;
}

.burger {
    padding: 20px;
    height: 200px;
}
</style>
