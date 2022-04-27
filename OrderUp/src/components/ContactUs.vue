<template>
    <div class="contactCon">
        <div class="info">
            <h2><b>
                FOOD. <br> 
                LETS TALK ABOUT <br> 
                ANY ISSUES YOU HAVE <br> 
                ALONG THE WAY.</b>
            </h2>
        </div>
        <div class="form">
            <form @submit.prevent="formsubmit">
                <h1>Contact Us</h1>
                <p>Name:</p>
                <input type="text"  name="Name" v-model="name" placeholder="First Name" required/>
                <br>
                <p>Phone Number:</p>
                <input type="text"  name="Number" v-model="number" placeholder="Phone Number" required/>
                <br>
                <p>Subject:</p>
                <input type="text"  name="Subject" v-model="subject" placeholder="Subject" required/>
                <br>
                <p>Description:</p>
                <textarea type="text"  name="Description" v-model="description" placeholder="Description" required/>
                <br>
                <button class="btn"> SHOOT YOUR MESSAGE </button>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "ContactUs",
    data(){
        return{
            name: "",
            number: "",
            subject: "",
            description: "",
        }
    },
    methods: {
        formsubmit: function () {
            this.name = "";
            this.number = "";
            this.subject = "";
            this.description = "";
            alert("Thank you for contacting us, we value your comments.");
        }
    }
}
</script>


<style lang="scss">

.contactCon {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-auto-rows: minmax(min-content, max-content);
    height: 100vh;
    width: 100vw;

   .info{
        display: inline-grid;
        align-items: center;
        background-color: beige;
        height: 100vh;
        h2{
            font-size: 40pt;
            font-weight: 600;
            text-align: left;
            margin: 0 auto;
            text-shadow: 0.5px 0 currentColor;
            line-height: 70px;

        }
   }
   .form{
       background-color: beige;
        display: inline-grid;
        align-items: center;
        text-align: left;
        padding: 85px;
        p{
            font-weight: 600;
        }
        input{
            width: 100%;
            height: 40px;
            border: none;
            outline: none;
            border-bottom:1px solid rgb(0, 46, 0);
            transition: border-bottom 0.1s;
            
            background-color: transparent;
        }
        input:hover{
            border-bottom: 2px solid rgb(46, 133, 46);
        }
        input:active{
            border-bottom: 2px solid rgb(46, 133, 46);

        }
        textarea{
            width: 100%;
            resize: vertical;
            height: 40px;
            border: none;
            outline: none;
            border-bottom:1px solid rgb(0, 46, 0);
            transition: border-bottom 0.1s;
            
            background-color: transparent;
        }
        button{
            margin: 40px 0 20px 0;
            width: 100%;
            height: 40px;
            border: none;
            font-size: 12pt;
            background-color: rgb(0, 46, 0);
            color: white;
            transition: background-color 0.1s;

        }
        button:hover{
            background-color: rgb(46, 133, 46);
            cursor: pointer;
        }

        a{
            padding-top: 20px;
            text-decoration-line: none;
            font-style: italic;
            color: rgb(46, 133, 46);
        }
        a:hover{
            color: rgb(153, 192, 85);
        }
   }
}

</style>