<template>
    <div id="header">
        <div id="title">
            <router-link  to="/">Order Up</a>
        </div>
        <div v-if="!isLoggedIn" id="profile">
            <router-link  to="/login">Login</a> 
        </div>
        <div id="whenloggedin">
            <div v-if="isLoggedIn" id="profile">
                <router-link style="text-decoration: none;" to="/account" >Profile</router-link> 
            </div>
            <div v-if="isLoggedIn" id="profile">
                <a v-on:click="logout" href="/">Logout</a> 
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
#header {
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}

#whenloggedin {
    display: flex;
    flex-direction: row;
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