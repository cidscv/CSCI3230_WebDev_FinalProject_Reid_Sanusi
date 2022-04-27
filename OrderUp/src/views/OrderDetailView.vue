<template>
  <div>
    <OrderDetail />
    
  </div>
</template>

<script>
// @ is an alias to /src
import OrderDetail from '../components/OrderDetail.vue'

export default {
  name: 'Order',
  components: {OrderDetail},
  data() {
    return {};
  }
  
  //components: {
  //  LoginForm
  //}
}
</script>