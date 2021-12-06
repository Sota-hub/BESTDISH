const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = express.Router();

// Sign up
router.post("/users/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateToken();
    res.status(201).send({ user, token });
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
    const token = await user.generateToken();
    res.send({ user: user.getPublicProfile(), token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Sign out
router.post("/users/signout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Display authorized user profile
router.get("/users/profile", auth, async (req, res) => {
  res.send(req.user);
});

// Update user profile
router.patch("/users/:id", auth, async (req, res) => {
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
