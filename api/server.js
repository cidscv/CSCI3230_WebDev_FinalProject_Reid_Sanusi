const express = require("express");
const cors = require("cors");
const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:Password1.@orderup.cmbes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect().then(client => {
    console.log('Connected to Database')
    const db = client.db('OrderUp')
    const restaurant = db.collection('restaurants')
    app.get('/restaurants', (req, res) => {
        restaurant.findOne({}, function(err, result) {res.send(result.name);})
    })
}).catch(console.error)

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.send("Hello World");
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});