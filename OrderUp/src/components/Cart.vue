<template>
            <div class="cart__product js-cart-product-template">
                <article class="js-cart-product">
                <h1>{{title}} | ${{price}}</h1>
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
export default {
    name: "Cart",
    props: {
        title: String,
        price: String,
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
