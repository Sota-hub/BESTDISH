const express = require("express");
const Dish = require("../models/dish");
const router = express.Router();

router.post("dishes/post", async (req, res) => {
  const dish = new Dish(req.body);

  try {
    await dish.save();
    res.status(201).send(dish);
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/search", async (req, res) => {
  const dishName = req.query.dishName;
  const price = +req.query.price;

  try {
    const dishes = await Dish.find({ dishName: dishName, price: price });
    if (!dishes) return res.status(404).send("No menu matched");

    res.send(dishes);
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
