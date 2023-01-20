const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product_base: String,
  img_responsive: String,
  product_brand: String,
  product_name: String,
  product_size: String,
  product_ratingsContainer: String,
  product_ratingsCount: String,
  product_separator: String,
  product_discountedPrice: String,
  product_strike: String,
  product_discountPercentage: String,
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
