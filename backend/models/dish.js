const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  postUserId: String,
  dishName: String,
  evaluation: Number,
  price: Number,
  location: String,
  description: String,
  clarification: String,
  openHour: String,
  dayOff: String,
  website: String,
  saved: Number,
  visited: Number,
  latitude: Number,
  longitude: Number,
  postDate: Date,
  // image
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
