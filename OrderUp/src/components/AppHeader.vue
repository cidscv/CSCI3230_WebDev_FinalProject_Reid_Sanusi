<template>
<div class="header">
    <div class="navigation">
        <router-link to="/"> <img src="../assets/logo-07.png" alt="Order Up Logo"></router-link>

        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/restaurants">Restaurants</router-link>
            <router-link to="/contact">Contact Us</router-link>
            <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
            <router-link style="text-decoration: none;" to="/account" v-if="isLoggedIn">Profile</router-link> 
            <router-link v-on:click="logout" to="/" v-if="isLoggedIn">Logout</router-link> 
            <router-link to="#" >    
                <img
                src="../assets/shopping-cart.svg"
                alt="shopping cart" @click="toggle" v-if="isLoggedIn" class="cartButton js-toggle-cart" width="20px"/>
            </router-link>
        </div>
    </div>
    <aside class="cart js-cart">
            <div class="cart__header">
            <h1 class="cart__title">Shopping cart</h1>
            <p class="cart__text">
                <a @click="toggle" class="button button--light js-toggle-cart" href="#" title="Close cart">
                Close cart
                </a>
            </p>
            </div>
            <div class="cart__products js-cart-products">
            <p class="cart__empty js-cart-empty">
                Add a product to your cart
            </p>
            <div class="cart__product js-cart-product-template">
                <article class="js-cart-product">
                <h1>Product title</h1>
                <p>
                    <a @click="remove" class="js-remove-product" href="#" title="Delete product">
                    Delete product
                    </a>
                </p>
                </article>
            </div>
            </div>
            <div class="cart__footer">
            <p class="cart__text">
                <router-link @click="close" class="button" to="/order" title="Buy products">
                Buy products
                </router-link>
            </p>
            </div>
        </aside>
</div>
</template>

<script>
import auth from "../js/auth"
import cartMixin from "../js/cartMixin"
import $ from "JQuery"

export default {
    name: 'AppHeader',
    data(){
        return{
            isLoggedIn: auth.isLoggedIn()
        };
    },
    created(){
        auth.onLoginStatus = isLoggedIn => {
            this.isLoggedIn = isLoggedIn;
        }
    },
    mixins:[
        cartMixin
    ],
    methods: {
        logout: function(){
            this.logout();
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
    }
}
</script>

<style lang="scss">

.navigation{
    display: flex;
    padding: 20px 60px;
    background-color: #f7f7f7;
    align-items: center;
    justify-content: space-between;
}
.navigation img{
    width: 60px;
}

.navigation .links{
    display: inline-flex;
}
.navigation .links a{
    color: rgb(0, 0, 0);
    text-decoration: none;
    margin-left: 20px;
    font-size: 14pt;
    font-weight: 600;
    transition: border-bottom 0.1s;
}
.navigation .links a:hover{
    color: #0F4900;
    border-bottom: 2px solid #59da38;
}
.navigation .links a:active{
    color: #0F4900;
    border-bottom: 2px solid #59da38;
}
.navigation .links .cartButton{
        color: #0F4900;
        width: 20px;
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