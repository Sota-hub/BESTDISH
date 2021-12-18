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

// Add or remove a dish
router.patch("/save", auth, async (req, res) => {
  const user = req.user;
  const userId = req.body.userId;
  const dishId = req.body.dishId;

  // await User.findOne({
  //   _id: user._id,
  //   favorites: { userId, dishId },
  // });

  const includeUserId = user.favorites.some(
    (favorite) => favorite.userId === userId
  );

  const includeDishId = user.favorites.some(
    (favorite) => favorite.dishId === dishId
  );

  try {
    if (includeUserId && includeDishId) {
      user.favorites = user.favorites.filter((favorite) => {
        // return favorite.userId !== userId && favorite.dishId !== dishId
        if (favorite.userId === userId) {
          if (favorite.dishId === dishId) return false;
          else return true;
        }
        return true;
      });
    } else {
      user.favorites.push({ userId, dishId });
    }

    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Get authorized user favorites
router.get("/favorites", auth, async (req, res) => {
  const user = req.user;
  res.send({ favorites: user.favorites });
});

module.exports = router;
