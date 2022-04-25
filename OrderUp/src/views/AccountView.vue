<template>
  <div v-if="isLoggedIn">
    <Account :user="user" />
  </div>
</template>

<script>
// @ is an alias to /src
import Account from '../components/Account.vue'
import Login from '../components/Login.vue'
import axios from 'axios'
import auth from "../js/auth"

export default {
  name: 'AccountView',
  components: {
    Account
  },
  data() {
    return {
      user: Function,
      username: Login.methods.getUsername(),
      isLoggedIn: auth.isLoggedIn(),
    };
  },

  created:function(){
    axios.get(`http://localhost:8080/api/users?username=${this.username}`).then(response => {this.user = response.data;}).catch(error => console.log(error))
  },
}
</script>