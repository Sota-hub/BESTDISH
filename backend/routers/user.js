const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = express.Router();

// Sign up
router.post("/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(409).send(e);
  }
});

// Sign in
router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Sign out
router.post("/signout", auth, async (req, res) => {
  const user = req.user;
  const Token = req.token;

  try {
    user.tokens = user.tokens.filter((token) => {
      return token.token !== Token;
    });
    await user.save();

    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Get authorized user profile
router.get("/profile", auth, async (req, res) => {
  const user = req.user;
  const token = req.token;
  res.send({ user, token });
});

// Update user profile
router.patch("/update", auth, async (req, res) => {
  const user = req.user;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) return res.status(400).send(e);

  try {
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
