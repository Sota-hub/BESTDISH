const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const dishRouter = require("./routers/dish");
const userRouter = require("./routers/user");

mongoose.connect("mongodb://127.0.0.1:27017/best-dish-api");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json({ limit: "1.6mb" }));
app.use(express.urlencoded({ limit: "1.6mb", extended: true }));
app.use(express.json());
app.use(dishRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`BESTDISH listening at http://localhost:${port}`);
});
