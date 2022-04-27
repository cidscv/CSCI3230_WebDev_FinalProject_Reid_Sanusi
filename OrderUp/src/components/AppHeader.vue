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
    
</div>
</template>

<script>
import auth from "../js/auth"
import cartMixin from "../js/cartMixin"
import MenuItem from "./MenuItem.vue"
import $ from "JQuery"

export default {
    name: 'AppHeader',
    data(){
        return{
            isLoggedIn: auth.isLoggedIn(),
            title: '',
            price: 0,
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
        cartdetails: function(data) {
            this.title = data.menuname
            this.price = data.price
        },
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
    },
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
    


</style>