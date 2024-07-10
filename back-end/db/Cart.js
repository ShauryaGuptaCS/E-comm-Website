const mongoose=require('mongoose');

const CartSchema=mongoose.Schema({
    cart:{
        type:Map,
        of:Number,
        required:true,
        default:{}
    },
    username:String
})

module.exports=mongoose.model('carts',CartSchema);