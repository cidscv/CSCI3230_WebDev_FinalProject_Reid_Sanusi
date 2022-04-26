<template>
    <div class="registerCon">
        <img src="../assets/register_img.jpg" alt="register-splash">
        <div class="form">
            <form @submit.prevent="register">
                <h1>Register!</h1>
                <p> Username: </p>
                <input type="text" placeholder="Username" id="username" required v-model="user.username" name="username"/>
                <br>
                <p> Email Address: </p>
                <input type="text" placeholder="Email" id="email" required v-model="user.email" name="email"/>
                <br>
                <p> Password: </p>
                <input type="password" placeholder="Password" id="password" required v-model="user.password" name="password"/>

                <div v-if="errorMessage"> {{errorMessage}} </div>
                <br>
                <button @click="saveUser" class="btn"> Register </button>
                <router-link  to="/login">Have an account?</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import router from "../router";
import UserDataService from "../services/UserDataService";
export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: null,
        username: "",
        password: "",
        firstName: "",
        number: "",
        city: "",
        postalCode: "",
        lastName: "",
        email: "",
        state: "",
        country: "",
        active: false
      },
      submitted: false
    };
  },
  methods: {
    saveUser() {
      var data = {
        username: this.user.username,
        password: this.user.password,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        number: this.user.number,
        city: this.user.city,
        postalCode: this.user.postalCode,
        email: this.user.email,
        state: this.user.state,
        country: this.user.country,
      };
      UserDataService.create(data)
        .then(response => {
          this.user.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      
      router.push('/login')
    },
    
    newUser() {
      this.submitted = false;
      this.user = {};
    }
  }
};
    
</script>

<style lang="scss">

.registerCon {
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
            margin: 40px 0 20px 0;
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
        a{
            padding-top: 20px;
            text-decoration-line: none;
            font-style: italic;
            color: rgb(46, 133, 46);
        }
        a:hover{
            color: rgb(153, 192, 85);
        }
   }
}

</style>