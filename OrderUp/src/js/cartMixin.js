import $ from "JQuery"

export default {
    data() {
        return {
            cartOpen:false,
            numberOfProducts:0
        }
    },
    methods: {
        logout: function(){
            auth.logout((res) =>{
                console.log(res)
            });
        },
        toggleCart: function(e) {
            e.preventDefault();
            if(this.cartOpen) {
                this.closeCart();
                return;
            }
            this.openCart();
        },
        addProduct: function(e) {
            e.preventDefault();
            this.openCart();
            $('.js-cart-empty').addClass('hide');
            var product = $('.js-cart-product-template').html();
            $('.js-cart-products').prepend(product);
            this.numberOfProducts++;
        },
        removeProduct:function(e){
            e.preventDefault();
            this.numberOfProducts--;
            $(this).closest('.js-cart-product').hide(250);
            if(this.numberOfProducts == 0) {
                $('.js-cart-empty').removeClass('hide');
            }
        },
        openCart: function() {
            this.cartOpen = true;
            $('body').addClass('open');
        },
        closeCart: function() {
            this.cartOpen = false;
            $('body').removeClass('open');
        },
    }
}