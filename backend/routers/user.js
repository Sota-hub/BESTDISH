const express = require("express");
const User = require("../models/user");
const router = express.Router();

// Sign up
router.post("/users/signup", async (req, res) => {
  const user = new User(req.body);
  console.log(user);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

// Sign in
router.post("/users/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findByCredentials(email, password);
    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// find user???
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) return res.status(404).send(e);

    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update user profile
router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) return res.status(400).send(e);

  try {
    const _id = req.params.id;
    const body = req.body;
    const user = await User.findById(_id);

    updates.forEach((update) => (user[update] = body[update]));
    await user.save();

    if (!user) {
      return res.status(404).send(e);
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
