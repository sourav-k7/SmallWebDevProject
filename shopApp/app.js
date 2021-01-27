const express = require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const Product = require('./models/productSchema');
const { urlencoded } = require('express');
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
categories=['fruit','veg','dairy'];
app.use(urlencoded({extended:true}));
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('mongo connection open!!');
    })
    .catch(err=>{
        console.log("error while connecting to Database")
        console.log(err);
    })

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/product', async (req,res)=>{
    const products=await Product.find();
    res.render('index',{products})
})
app.post('/product',async (req,res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/product');
})
app.get('/product/new',(req,res)=>{
    res.render('new',{categories});
})
app.get('/product/:id',async (req,res)=>{
    let {id}=req.params;
    const product=await Product.findById(id);
    res.render('show',{product});
})
app.get('/product/:id/edit',async(req,res)=>{
    let {id}=req.params;
    const product=await Product.findById(id);
    res.render('edit',{product});
})
app.put('/product/:id',async(req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndUpdate(id,req.body,{runValidators:true,useFindAndModify:false});
    res.redirect(`/product/${id}`);
})
app.delete('/product/:id',async (req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndDelete(id,{useFindAndModify:false});
    res.redirect('/product');
})
app.listen(3000,()=>{
    console.log('app listening');
})