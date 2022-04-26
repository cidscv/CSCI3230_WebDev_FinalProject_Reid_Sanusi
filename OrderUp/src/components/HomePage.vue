<template>
    <section class="head">
        <div class="headImg"></div>
        <div class="cta">
            <h1>Fresh Food.<br>Fast Food.<br>Real Food.</h1>
            <p>Lorem ipsum dolor sit amet, cillum velit laboris veniam excepteur id ullamco id. Officia officia dolore eu officia amet nostrud ea veniam fugiat eiusmod fugiat. Id do ullamco quis laboris occaecat nisi exercitation aliqua laboris adipisicing elit id magna nulla eiusmod eu cupidatat nulla labore. <br><br>Eu occaecat duis aliquip ex proident nisi magna velit Lorem laboris magna adipisicing. Ex labore veniam do eiusmod labore in Lorem tempor aute duis eiusmod laboris in sunt adipisicing. Ea voluptate in non elit qui Lorem occaecat aute ad voluptate ipsum. Elit cupidatat excepteur anim esse in sunt. Cillum veniam mollit laborum ex non ipsum deserunt ad id.<br><br> Do sint elit dolor quis ad deserunt reprehenderit. Lorem occaecat consequat ullamco eu ipsum occaecat sunt commodo Lorem sit culpa.</p> 
            <a href="/restaurants">View all Restaurants</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>

<style lang="scss">

.head{
    background-color: #c0ffc9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 92vh;
}
.head .headImg{
    background-image: url("../assets/pexels-lisa-fotios-8385550.jpg") ;
    width: 100%;
    height: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

}
.head .cta {  
    padding: 70px;
    align-self: start;
    justify-self: center;
}
.head .cta h1{
    color: #181818;
    font-size: calc(3em + 5vw);    
    font-weight: 500;
    line-height: 120px;
}
.head .cta p{
    color: #0f4900;
    margin-top: -60px;
    font-size: 1em;    
    font-weight: 500;
    margin-bottom: 40px;
}
.head .cta a{
    color: white;
    background-color:#155505;
    border-radius: 40px;
    text-decoration: none;
    border: none;
    padding: 20px 40px;
    font-size: 14px; 
}
.head .cta a:hover{
    background-color:#29B107;
}

</style>
