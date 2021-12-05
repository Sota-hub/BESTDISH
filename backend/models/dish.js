const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  postUserId: String,
  dishName: String,
  evaluation: Number,
  price: Number,
  location: String,
  description: String,
  saved: Number,
  visited: Number,
  postDate: Date,
  latitude: Number,
  longitude: Number,
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
