const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    id:{type:Number,required:false},
    title:{type:String,required:true},
    price: {type:Number,required:true},
    description:{type:String,required:true},
    category: {type:String,required:true},
    image: {type:String,required:true},
    rating: {rate:Number,count:Number}
})
//so here it will create db know as product_info that we are pass into the mongoose model
const cart=mongoose.model('cart_info',cartSchema);
module.exports=cart;