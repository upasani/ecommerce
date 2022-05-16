const mongoose=require('mongoose');

//mongoose provide the connect function which connect out application with the mongoose
const connect=()=>{
    return mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.bim0u.mongodb.net/ecommerce?retryWrites=true&w=majority')

}
module.exports=connect;