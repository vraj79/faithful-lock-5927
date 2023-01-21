const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
  img1: String,
  title: String,
  price: Number,
  strike: String,
  category: String,
  maincategory: String,
  stock: Number,
  img2: String,
  quantity: {type : Number , default : 1},
  userID:String,
});
const CartItem = mongoose.model("cartItem", cartItemSchema);
module.exports = CartItem;
