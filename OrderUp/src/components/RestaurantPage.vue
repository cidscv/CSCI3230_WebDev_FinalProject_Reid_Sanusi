<template>
    <div class="restaurantPage">
        <div class="filter">
            <h1>Filter</h1>
            <a v-on:click="noFilter" href="#">All</a>
            <div class="cat"
                    :class="{ active: index == 0}"
                    v-for="(cat, index) in cats"
                    :key="index"
                >
                    <a v-on:click="filterByCat(cat)" href="#">{{cat}}</a>
            </div>
        </div>
        <div class="resthead">
            <div class="restNameInfo">
                <h1>{{currentRestaurant.restName}}</h1>
                <p>{{currentRestaurant.address}} </p>
                <p>{{currentRestaurant.number}}</p>
            </div>
            <div class="restaurants">
                <div class="menuitem"
                    :class="{ active: index == currentIndex }"
                    v-for="(menuitem, index) in menu"
                    :key="index"
                    @click="setActiveMenuItem(menuitem, index)"
                >
                    <MenuItem :menuname="menuitem.item" :price="menuitem.price"/>
                </div>
            </div>
        </div>
        <aside class="cart js-cart">
            <div class="cart__header">
            <h1 class="cart__title">Shopping cart</h1>
            <p class="cart__text">
                <a @click="toggle" class="button button--light js-toggle-cart" href="#" title="Close cart">
                Close cart
                </a>
            </p>
            </div>
            <div class="cart__products js-cart-products">
            <p class="cart__empty js-cart-empty">
                Add a product to your cart
            </p>
            <div class="cart__product js-cart-product-template">
                <article class="js-cart-product">
                <h1>{{currentMenuItem.item}} | ${{currentMenuItem.price}}</h1>
                <p>
                    <a @click="remove" class="js-remove-product" href="#" title="Delete product">
                    Delete product
                    </a>
                </p>
                </article>
            </div>
            </div>
            <div class="cart__footer">
            <p class="cart__text">
                <router-link @click="close" class="button" title="Buy products" to="/order">
                Buy products
                </router-link>
            </p>
            </div>
        </aside>
    </div>
</template>

<script>
import MenuItem from "./MenuItem.vue"
import RestaurantDataService from "../services/RestaurantDataService";
import cartMixin from "../js/cartMixin"
import Login from "./Login.vue";
import axios from 'axios'
import UserDataService from "../services/UserDataService";

export default{
    name: 'RestaurantPage',
    components: {
        MenuItem
    },
    data() {
        return {
            menu: [],
            cats: [],
            cart: ["hi"],
            user: Function,
            username: Login.methods.getUsername(),
            currentRestaurant: "",
            currentMenuItem: "",
            currentIndex: -1,
            route: this.$route,
            message: ''
        };
  },
  created:function(){
    axios.get(`http://localhost:8080/api/users?username=${this.username}`).then(response => {this.user = response.data;}).catch(error => console.log(error))
  },
  mixins: [
        cartMixin
  ],
  methods: {
    getRestaurant(id) {
      RestaurantDataService.get(id)
        .then(response => {
          this.currentRestaurant = response.data;
          this.menu = response.data.menu;
          
          for (var i = 0; i < response.data.menu.length; i++) {
              if (this.menu[i].cat in this.cats) {
                console.log("already in category")
              } else {
                  this.cats.push(this.menu[i].cat);
              }
          }


          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMenuItem(menuitem, index) {
      this.currentMenuItem = menuitem;
      this.currentIndex = index;
      //this.cart.push(this.currentMenuItem);
      console.log(this.currentMenuItem);
    },
    filterByCat(cat) {
        console.log(cat);
        this.menu.forEach(menuitem => {
            console.log(menuitem);
            if (menuitem.cat != cat) {
                this.menu.splice(this.menu.indexOf(cat));
                console.log(this.menu);
            }
        })
    },
    noFilter() {
        this.cats = [];
        this.getRestaurant(this.$route.params.id);
    },
    add_prod(e) {
            this.addProduct(e);
        },
        toggle: function(e) {
             this.toggleCart(e);
        },
        
        open: function() {
            this.toggleCart()
        },
        close: function() {
            console.log(this.cart);
            this.user[0].cart = this.cart;
            console.log(this.user[0]);
            UserDataService.update(this.user[0].id, this.user[0]);
            this.closeCart()
        },
        remove: function() {
           this.removeProduct()
        },
  },
  mounted() {
    this.message = '';
    console.log("working")
    this.getRestaurant(this.$route.params.id);
  }
}; 

</script>

<style lang="scss">

.restaurants{
    padding: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.restaurantCard .content{
    padding: 20px 40px ;
}


.restaurantPage{
    display: grid;
    grid-template-columns: 1fr 9fr;
}
.restaurantPage .filter{
    display: flex;
    background-color: #f7f7f7;
    padding: 10px 30px;
    flex-direction: column;
}
.restaurantPage .filter h1{
    font-variant: small-caps;
    font-size: 1.5em;
    color: #59da38;
}
.restaurantPage .filter a{
    margin-top: 15px;
    color: #296b47;
    text-decoration: none;
    
}
.restaurantPage .filter a:hover{
    color: #0F4900;
}
.restaurantPage .filter a:active{
    color: #0F4900;
}
.restaurantPage .restNameInfo {
    padding: 20px 40px;
}

body.open {
    overflow-y: hidden;
}

.button {
    display: inline-block;
    background: #39c;
    padding: 5px 10px;
    border-radius: 3px;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: #fff;

    :hover {
        cursor: pointer;
    }
}
.button--light {
    background: #fff;
    color: #f00;
}
.cart {
    position: fixed;
    background: #f3f3f3;
    width: 400px;
    max-width: 90%;
    height: 100%;
    top: 0;
    right: 0;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transform: translate(500px, 0);
    transition: transform 250ms ease-in-out;
    z-index: 20;
}
body.open .cart {
    transform: translate(0, 0);
}
.cart__header {
    box-sizing: border-box;
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    width: 100%;
    padding: 15px 15px;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.cart__header .cart__text {
    float: right;
}
.cart__title {
    font-size: 20px;
    line-height: 40px;
    margin: 0;
    float: left;
}
.cart__products {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 70px 0;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 1;
}
.cart__products article {
    padding: 15px;
    border-bottom: 1px dotted #ccc;
}
.cart__products article h1 {
    font-size: 16px;
    line-height: 20px;
    margin: 0;
}
.cart__products article p {
    font-size: 14px;
    margin: 0;
}
.cart__products article p a {
    color: #f00;
}
.cart__product {
    display: none;
}
.cart__empty {
    padding: 30px 15px;
    margin: 0;
    font-style: italic;
    text-align: center;
}
.cart__empty.hide {
    display: none;
}
.cart__footer {
    box-sizing: border-box;
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    width: 100%;
    padding: 15px;
    left: 0;
    bottom: 0;
    z-index: 2;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
    text-align: right;
}
.cart__text {
    margin: 0;
}
.cart__text .button {
    padding: 10px 15px;
}
.lightbox {
    position: fixed;
    background: #000;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
    transition: opacity 250ms ease-in-out, width 0ms ease-in-out 250ms;
}
body.open .lightbox {
    width: 100%;
    opacity: 0.8;
    transition: opacity 250ms ease-in-out, width 0ms ease-in-out;
}
</style>