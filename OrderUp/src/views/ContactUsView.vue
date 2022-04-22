<template>
  <div>
    <ContactUs />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactUs from '../components/ContactUs.vue'

export default {
  name: 'RegisterView',
  components: {ContactUs},
  data() {
    return {};
  }
  
  //components: {
  //  LoginForm
  //}
}
</script>