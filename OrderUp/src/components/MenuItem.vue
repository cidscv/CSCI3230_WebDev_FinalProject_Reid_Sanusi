<template>
        <div class="restaurantCard">
            <img src="../assets/pexels-lisa-fotios-8385550.jpg" alt="">
            <div class="content">
                <p class="mainText">
                    {{menuname}}
                </p>
                <p class="metaText"> ${{price}}</p>
                <a @click="add_prod" class="addToCart js-add-product"> Add to Cart</a>
            </div>
        </div>
</template>

<script>
import cartMixin from "../js/cartMixin"
export default {
    name: 'MenuItem',
    props: {
        menuname: String,
        price: String,
    },
    mixins: [
        cartMixin
    ],
    methods: {
        add_prod(e) {
            this.addProduct(e);
        },
        toggle: function(e) {
             this.toggleCart(e);
        },
        
        open: function() {
            this.toggleCart()
        },
        close: function() {
           this.closeCart()
        },
        remove: function() {
           this.removeProduct()
        },
    },
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
body.open {
    overflow-y: hidden;
}

.button {
    display: inline-block;
    background: #39c;
    padding: 5px 10px;
    border-radius: 3px;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
}
.button--light {
    background: #fff;
    color: #f00;
}
.cart {
    position: fixed;
    background: #f3f3f3;
    width: 400px;
    max-width: 90%;
    height: 100%;
    top: 0;
    right: 0;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transform: translate(500px, 0);
    transition: transform 250ms ease-in-out;
    z-index: 20;
}
body.open .cart {
    transform: translate(0, 0);
}
.cart__header {
    box-sizing: border-box;
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    width: 100%;
    padding: 15px 15px;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.cart__header .cart__text {
    float: right;
}
.cart__title {
    font-size: 20px;
    line-height: 40px;
    margin: 0;
    float: left;
}
.cart__products {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 70px 0;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 1;
}
.cart__products article {
    padding: 15px;
    border-bottom: 1px dotted #ccc;
}
.cart__products article h1 {
    font-size: 16px;
    line-height: 20px;
    margin: 0;
}
.cart__products article p {
    font-size: 14px;
    margin: 0;
}
.cart__products article p a {
    color: #f00;
}
.cart__product {
    display: none;
}
.cart__empty {
    padding: 30px 15px;
    margin: 0;
    font-style: italic;
    text-align: center;
}
.cart__empty.hide {
    display: none;
}
.cart__footer {
    box-sizing: border-box;
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    width: 100%;
    padding: 15px;
    left: 0;
    bottom: 0;
    z-index: 2;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
    text-align: right;
}
.cart__text {
    margin: 0;
}
.cart__text .button {
    padding: 10px 15px;
}
.lightbox {
    position: fixed;
    background: #000;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
    transition: opacity 250ms ease-in-out, width 0ms ease-in-out 250ms;
}
body.open .lightbox {
    width: 100%;
    opacity: 0.8;
    transition: opacity 250ms ease-in-out, width 0ms ease-in-out;
}
</style>
