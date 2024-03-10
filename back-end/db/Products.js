const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    productName: String,
    category: String,
    price: Number,
    owner: String,
    ownerCountry: String,
    ownerAddress: String,
    description: String,
    imageUrl: String,
    productId:String
});
module.exports=mongoose.model('Products',productSchema);