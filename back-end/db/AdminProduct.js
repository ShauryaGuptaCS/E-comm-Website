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
});
module.exports=mongoose.model('adminProducts',productSchema);
