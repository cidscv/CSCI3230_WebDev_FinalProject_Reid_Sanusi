<template>
  <div>
    <LoginForm />
    
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '../components/Login.vue'

export default {
  name: 'LoginView',
  components: {LoginForm},
  data() {
    return {};
  }
  
  //components: {
  //  LoginForm
  //}
}
</script>