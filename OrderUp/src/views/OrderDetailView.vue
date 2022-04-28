<template>
  <div>
    <OrderDetail :user="user" />
    
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import axios from 'axios';
import OrderDetail from "../components/OrderDetail.vue";

export default{
    name: 'OrderView',
    components: {
      OrderDetail
    },
    data() {
        return {
            user: Function,
            username: Login.methods.getUsername()
        };
    },
    created:function(){
        axios.get(`http://localhost:8080/api/users?username=${this.username}`).then(response => {this.user = response.data;}).catch(error => console.log(error))
    },
}

</script>