<template>
  <div>
    <RegisterForm />
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '../components/Register.vue'

export default {
  name: 'RegisterView',
  components: {RegisterForm},
  data() {
    return {};
  }
  
  //components: {
  //  LoginForm
  //}
}
</script>