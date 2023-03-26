const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  imageTsrc: String,
  productRefLink: String,
  rating: String,
  colors: String,
  price: String,
  mPrice: String,
  name: String,
  shape: String,
  gender: String,
  style: String,
  dimension: String,
  productType: String,
  productId: String,
  userRated: String,
  quntity: String,
  id: Number,
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
