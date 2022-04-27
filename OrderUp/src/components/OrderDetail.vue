<template>
    <section class="orderHead">
        <div>
            <div class="congrats">
                <h1>Order Details</h1>
                <p>Thank you for ordering, we're on our way!</p>
            </div>
            <div style="text-align: center;">
                <div class="orderInfo">
                    <div class="foodPic">
                    </div>
                    <div class="infoRight">
                        <p>Name: Burger</p>
                        <p>Order Id: 1</p>
                        <p>Quantity: 1</p>
                        <p>Total: <strong>$44.94</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            
        </div>
    </section>
</template>

<script>
export default{
    name: 'OrderDetail',
    props: {cart: ['cart']},
    mounted() {
        console.log("working");
        console.log(this.cart);
    }
}
</script>

<style lang="scss">
.orderHead{
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    height: 100vh;
    
}
.orderHead .right{
    background-image: url("../assets/orderConf3.gif");
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.orderInfo {
    display: inline-grid;
    grid-template-columns: 2fr 1fr;
    height: 200px;
    border: 1px solid rgb(201, 201, 201);
    margin: 20px 40px;
    border-radius: 20px;
}
.orderInfo .foodPic{
    background-image: url("../assets/pexels-lisa-fotios-8385550.jpg");
    width: 100%;
    height: 100%;
    background-size: cover;
    
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-repeat: no-repeat;
    background-position: center;
}
.orderInfo .infoRight{
    padding: 20px;
    text-align: left;
}

.orderHead .congrats {
    text-align: center;
}
.orderHead .congrats h1{
    font-size: 22pt;
}
</style>