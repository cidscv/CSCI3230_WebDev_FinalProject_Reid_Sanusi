<template>
  <div>
    <Account />
  </div>
</template>

<script>
// @ is an alias to /src
import Account from '../components/Account.vue'

export default {
  name: 'AccountView',
  components: {Account},
  data() {
    return {};
  }
  
  //components: {
  //  LoginForm
  //}
}
</script>