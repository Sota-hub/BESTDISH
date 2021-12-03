const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const port = 3001;

mongoose.connect("mongodb://127.0.0.1:27017/best-dish-api");

const app = express();

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
});

const Dish = mongoose.model("Dish", dishSchema);

router.get("/search", async (req, res) => {
  const dishName = req.query.dishName;
  const price = +req.query.price;

  console.log(dishName, price);

  try {
    const dishes = await Dish.find({ dishName: dishName, price: price });
    if (!dishes) return res.send("No menu matched");
    console.log(dishes);
    res.send(dishes);
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
