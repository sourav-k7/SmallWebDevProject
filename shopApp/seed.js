const mongoose = require('mongoose');
const Product=require('./models/productSchema')

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('mongo connection open!!');
    })
    .catch(err=>{
        console.log("error while connecting to Database")
        console.log(err);
    })

Product.insertMany([
    {
        name:"milk",
        price:"46",
        category:"dairy"
    },
    {
        name:"Broccoli",
        price:100,
        category:"veg"
    },
    {
        name:"orange",
        price:234,
        category:"fruit"
    },
    {
        name:"cauliflower",
        price:32,
        category:"veg"
    }
])