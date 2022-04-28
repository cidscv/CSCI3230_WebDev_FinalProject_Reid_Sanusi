<template>
    <section class="homeHead">
        <div class="homeHeadImg"></div>
        <div class="cta">
            <h1>Fresh Food.<br>Fast Food.<br>Real Food.</h1>
            <p>We welcome you to sit back, unwind and appreciate the lovely sights and hints of  life while our best gourmet restuarants set you up a scrumptious dinner utilizing the best and freshest ingredients. Our legacy comes from our relentless energy to cook and serve solid, amazing gourmet food.</p> 
            <router-link v-if="isLoggedIn" to="/restaurants">View all Restaurants</router-link>
        </div>
    </section>
</template>

<script>
import auth from "../js/auth"
export default {
    name: 'HomeView',
    data(){
        return{
            isLoggedIn: auth.isLoggedIn(),
        };
    }
}
</script>

<style lang="scss">

.homeHead{
    background-color: #c0ffc9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height:  100vh;
}
.homeHead .homeHeadImg{
    background-image: url("../assets/pexels-lisa-fotios-8385550.jpg") ;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

}
.homeHead .cta {  
    padding: 70px;
    align-self: start;
    justify-self: center;
}
.homeHead .cta h1{
    color: #181818;
    font-size: calc(3em + 5vw);    
    font-weight: 500;
    line-height: 120px;
}
.homeHead .cta p{
    color: #0f4900;
    margin-top: -60px;
    font-size: 1em;    
    font-weight: 500;
    margin-bottom: 40px;
}
.homeHead .cta a{
    color: white;
    background-color:#155505;
    border-radius: 40px;
    text-decoration: none;
    border: none;
    padding: 20px 40px;
    font-size: 14px; 
}
.homeHead .cta a:hover{
    background-color:#29B107;
}

</style>
