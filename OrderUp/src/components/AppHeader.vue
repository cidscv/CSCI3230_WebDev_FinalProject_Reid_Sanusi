<template>

<div class="navigation">
    <router-link to="/"> <img src="../assets/logo-07.png" alt="Order Up Logo"></router-link>

    <div class="links">
        <a href="/">Home</a>
        <a href="/restaurants">Restaurants</a>
        <a href="#">Contact Us</a>
        <a href="/login" v-if="!isLoggedIn">Login</a>
        <div v-if="isLoggedIn" id="whenloggedin">
            <router-link style="text-decoration: none;" to="/account" v-if="isLoggedIn">Profile</router-link> 
            <router-link v-on:click="logout" to="/" v-if="isLoggedIn">Logout</router-link> 
        </div>
    </div>
</div>
</template>

<script>
import auth from "../js/auth"

export default{
    name: 'AppHeader',
    data(){
        return{
            isLoggedIn: auth.isLoggedIn(),
        };
    },

    created(){
        auth.onLoginStatus = isLoggedIn => {
            this.isLoggedIn = isLoggedIn;
        }
    },
    methods:{
        logout: function(){
            auth.logout( (res) =>{
                console.log(res)
            });
        }
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
    

</style>