<template>
    <div class="detail">
        <h1>My Account</h1>
        <p>Hello Owen!</p>
        <p>You can manage your orders and information here.</p>

        <div class="navigations">
            <button @click="order"   class="orders">Orders</button>
            <button @click="info"   class="info">Personal information</button>
            <button @click="paydets"   class="payments">Payment Details</button>

        </div>
    </div>
    <div>
        <div class="orders">
            <table>
                <thead>
                    <td>Order ID</td>
                    <td>Date</td>
                    <td>Total</td>
                    <td>Action</td>
                </thead>
                <tbody>
                    <td>1</td>
                    <td>May 3rd, 2022</td>
                    <td>$332.68</td>
                    <td><Button>View</Button></td>
                </tbody>
            </table>
        </div>
        <div class="personalInfo">
            <form>
                <div class="split left">
                    <p>First Name:</p>
                    <input type="text"  name="firstName" placeholder="firstName" required/>
                    <br>
                    <p>Phone Number:</p>
                    <input type="text"  name="Number" placeholder="Number" required/>
                    <br>
                    <p>City:</p>
                    <input type="text"  name="City" placeholder="City" required/>
                    <br>
                    <p>Postal Code:</p>
                    <input type="text"  name="Postal Code" placeholder="Postal Code" required/>
                    <br>
                </div>
                <div class="split left">
                    <p>Last Name:</p>
                    <input type="text"  name="lastName" placeholder="lastName" required/>
                    <br>
                    
                    <p>Email Address</p>
                    <input type="text"  name="emai" placeholder="emai" required/>
                    <br>
                
                    <p>State:</p>
                    <input type="text"  name="State" placeholder="State" required/>
                    <br>
                
                    <p>Country:</p>
                    <input type="text"  name="Country" placeholder="Country" required/>
                    <br>
                </div>
                
               
                <button class="btn"> SHOOT YOUR MESSAGE </button>
            </form>
        </div>

        <div class="card">
            <form>
                    <p>Card Number:</p>
                    <input type="text"  name="firstName" placeholder="firstName" required/>
                    <br>
                    <p>Exp Date:</p>
                    <input type="text"  name="Number" placeholder="Number" required/>
                    <br>
                    <p>City:</p>
                    <input type="text"  name="City" placeholder="City" required/>
                    <br>
                    <p>Cvv:</p>
                    <input type="text"  name="Postal Code" placeholder="Postal Code" required/>
                    <br>
               
                <button class="btn"> SHOOT YOUR MESSAGE </button>
            </form>
        </div>
    </div>
    
</template>

<style lang="scss">
.personalInfo{
    form{
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-auto-rows: minmax(min-content, max-content);
    }
}
.detail{
    background-color: beige;
    height: 20vh;
    .navigations{
        display: flex;
        align-content: center;
        justify-content: center;
        button{
            background-color: darkgreen;
            width: 200px;
            height:50px;
            color: white;
            border: none;
            z-index: 9999;
        }
        button:hover{
            background-color: rgb(32, 139, 32);
            cursor: pointer;
        }
    }
}

</style>

<script>
    import $ from "jquery";
    
    export default {
        name: "Account",
        data(){
            return{
                username: "Bret",
                password: "hildegard.org",
                errorMessage: ""
            }
        },
        methods: {
            
            order: function(){
                $('.orders').click(function(){
                    $('.orders').show()
                    $('.personalInfo').hide()
                    $('.card').hide()
                })
            },
            info: function(){
                $('.personalInfo').click(function(){
                    console.log('personalInfo')

                    $('.personalInfo').show()
                    $('.orders').hide()
                    $('.card').hide()
                })
            },
            paydets: function(){
                $('.card').click(function(){
                    console.log('card')

                    $('.card').show()
                    $('.orders').hide()
                    $('.personalInfo').hide()
                })
            },
           
        },
    }
</script>