<template>
    <div class="detail">
        <h1>My Account</h1>
        <p>Hello Owen!</p>
        <p>You can manage your orders and information here.<br>Please click on one of the buttons below.</p>

        <div class="navigations">
            <button @click="visDivs('orders')" class="orders">Orders</button>
            <button @click="visDivs('info')" class="info">Personal information</button>
            <button @click="visDivs('payments');" class="payments">Payment Details</button>

        </div>
    </div>
    <div class="settings">
        <div v-if="orderVisible" class="orders">
            <table>
                <thead>
                    <tr class="head">
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>May 3rd, 2022</td>
                        <td>$32.68</td>
                        <td><button>View</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>May 3rd, 2022</td>
                        <td>$32.68</td>
                        <td><button>View</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="infoVisible" class="personalInfo">
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
                
               
                <button class="btn"> Update </button>
            </form>
        </div>
        <div v-if="cardVisible" class="card">
            <form>
                 <div class="split left">
                    <p>Card Number:</p>
                    <input type="text"  name="cardNum" placeholder="374245455400126" required/>
                    <br>
                    <p>Exp Date:</p>
                    <input type="text"  name="expDate" placeholder="10/26" required/>
                    <br>
                </div>
                <div class="split left">  
                    <p>Cvv:</p>
                    <input type="text"  name="cvv" placeholder="321" required/>
                    <br>
                </div>      
                <button class="btn"> Update </button>                         
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
    padding-top: 40px;
    height: 20vh;
    h1{
        margin-top: 0;
    }
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
        .selected{
            background-color: rgb(32, 139, 32);
        }
    }
}

.settings{
    .orders{
        margin: 40px;

        table{
            text-align: left;
            margin: 0 auto;
            border-collapse: collapse;
            width: 80vw;
            padding: 40px;
            color: darkgreen;
            border-radius: 15px 50px 30px 5px;
            tr{
                border: 2px solid rgb(230, 230, 230);

                th{
                    padding: 20px;
                }
            }
            tbody tr{
                border: 2px solid rgb(230, 230, 230);
                td{
                    padding: 20px;
                }
            }
            tbody tr:nth-child(even){
                background-color: rgb(230, 230, 230);
            }
            button{
                background-color: darkgreen;
                width: 60px;
                height:30px;
                color: white;
                border: none;
                
            }
            button:hover{
                background-color: rgb(32, 139, 32);
                cursor: pointer;
            }
        }
    }
    .personalInfo{
        form{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            padding: 40px;
            text-align: left;
            input{
                background-color: white;
                width: 80%;
                height: 40px;
                border: none;
                outline: none;
                border-bottom:1px solid rgb(0, 46, 0);
                transition: border-bottom 0.1s;

            }
            input:hover{
                border-bottom: 2px solid rgb(46, 133, 46);
            }
            input:active{
                border-bottom: 2px solid rgb(46, 133, 46);

            }
            p{
                font-size: 12pt;
                font-weight: 600;
                margin: 20px 0px 10px 0px;
            }
            button{
                margin-top: 20px;
                background-color: darkgreen;
                width: 60px;
                height:30px;
                color: white;
                border: none;
                
            }
            button:hover{
                background-color: rgb(32, 139, 32);
                cursor: pointer;
            }
        }
    }
    .card{
        form{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            padding: 40px;
            text-align: left;
            input{
                background-color: white;
                width: 80%;
                height: 40px;
                border: none;
                outline: none;
                border-bottom:1px solid rgb(0, 46, 0);
                transition: border-bottom 0.1s;

            }
            input:hover{
                border-bottom: 2px solid rgb(46, 133, 46);
            }
            input:active{
                border-bottom: 2px solid rgb(46, 133, 46);

            }
            p{
                font-size: 12pt;
                font-weight: 600;
                margin: 20px 0px 10px 0px;
            }
            button{
                margin-top: 20px;
                background-color: darkgreen;
                width: 60px;
                height:30px;
                color: white;
                border: none;
                
            }
            button:hover{
                background-color: rgb(32, 139, 32);
                cursor: pointer;
            }
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
                 orderVisible: false,
                 infoVisible: false,
                 cardVisible: false,
            }
        },
        methods: {
            visDivs: function(ev){
                this.orderVisible = false
                this.infoVisible = false
                this.cardVisible = false
                $('.orders').removeClass('selected');
                $('.info').removeClass('selected');
                $('.payments').removeClass('selected');

                 
                if(ev == 'orders'){
                    $('.orders').addClass('selected');
                    this.orderVisible = true
                }
                if(ev == 'info'){
                    $('.info').addClass('selected');
                    this.infoVisible = true

                }
                if(ev == 'payments'){
                    $('.payments').addClass('selected');
                    this.cardVisible = true

                }
            },           
        },
    }
</script>