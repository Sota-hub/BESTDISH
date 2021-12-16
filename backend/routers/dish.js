const express = require("express");
const Dish = require("../models/dish");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/post", auth, async (req, res) => {
  const id = req.user._id;
  const dish = new Dish({
    ...req.body,
    userId: id,
    postDate: new Date(),
  });

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
    const dishes = await Dish.find({ dishName, price });

    if (!dishes) return res.status(404).send("No menu matched");

    res.send(dishes);
  } catch (e) {
    res.status(500).send("Something went wrong");
  }
});

router.get("/menu/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  await user.populate(["dishes"]);
  res.send(user.dishes);
});

router.get("/:userId/:dishId", async (req, res) => {
  const dish = await Dish.findById({
    userId: req.params.userId,
    _id: req.params.dishId,
  });
  res.send(dish);
});

module.exports = router;
