<template>
            <div class="cart__product js-cart-product-template">
                <article class="js-cart-product">
                <h1>{{cart[0].item}} | ${{price}}</h1>
                <p>
                    <a @click="remove" class="js-remove-product" href="#" title="Delete product">
                    Delete product
                    </a>
                </p>
                </article>
            </div>
</template>

<script>

import cartMixin from "../js/cartMixin";
import RestaurantPage from "./RestaurantPage.vue";
export default {
    name: "Cart",
    data() {
        return {
            cart: RestaurantPage.methods.getCart(),
        }
    },
    mixins:[
        cartMixin
    ],
    methods: {
        remove: function() {
           this.removeProduct()
        },
    }
}
</script>
