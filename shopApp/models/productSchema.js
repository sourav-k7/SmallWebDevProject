const mongoose=require('mongoose');

const productSchema=mongoose.Schema(
   {
       name:{
           type:String,
           require:true
       },
       price:{
           type:Number,
           default:0
       },
       category:{
        type:String,
        lowercase:true,
        enum:['fruit','veg','dairy']
       }
   } 
)

const Product=mongoose.model('Product',productSchema);

module.exports=Product;