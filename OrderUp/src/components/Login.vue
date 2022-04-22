<template>
    <div class="loginCon">
        <img src="../assets/login_img.jpg" alt="login splash">
        <div class="form">
            <form @submit.prevent="login">
                <p> Username: </p>
                <input type="text" v-model="username" name="username" placeholder="Username"/>
                <br>
                <p> Password: </p>
                <input type="password" v-model="password" name="password" placeholder="Password"/>
                <div v-if="errorMessage"> {{errorMessage}} </div>
                <br>
                <button class="btn"> Login </button>
            </form>
        </div>
    </div>
    
</template>

<style lang="scss">

#header{
    display: none;
}
.loginCon {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    height: 100vh;
    width: 100vw;

   img{
        height: 100vh;
        width: 100%;
        object-fit: cover; 
       filter: brightness(0.8);
   }
   .form{
        display: inline-grid;
        align-items: center;
        text-align: left;
        padding: 85px;
        p{
            font-weight: 600;
        }
        input{
            width: 100%;
            height: 40px;
            border: none;
            outline: none;
            border-bottom:1px solid rgb(0, 46, 0);
            transition: border-bottom 0.1s;
        }
        input:hover{
            border-bottom: 2px solid rgb(46, 133, 46);
        }
        input:active{
            border-bottom: 2px solid rgb(46, 133, 46);

        }
        button{
            margin-top: 40px;
            width: 100%;
            height: 40px;
            border: none;
            font-size: 12pt;
            background-color: rgb(0, 46, 0);
            color: white;
            transition: background-color 0.1s;

        }
        button:hover{
            background-color: rgb(46, 133, 46);
            cursor: pointer;
        }
   }
}

</style>

<script>

    import auth from '../js/auth';
    export default {
        name: "LoginForm",
        data(){
            return{
                username: "Bret",
                password: "hildegard.org",
                errorMessage: ""
            }
        },
        methods:{
            login(){
                const user = this.username
                console.log('Call login()');
                auth.login(this.username, this.password, (res) => {
                    if (res.auth){
                        //Login succesful, go to home page.
                        console.log('Login success');
                        
                        this.$router.push({
                            name: 'home',
                            params: {
                                user: user
                            }
                        })
                    } else{
                        //Login failed.
                        console.log('Login failed');
                        this.errorMessage = "Login failed";
                    }
                })
            }
        }
    }
</script>