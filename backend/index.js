const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const dishRouter = require("./routers/dish");
const userRouter = require("./routers/user");

mongoose.connect("mongodb://127.0.0.1:27017/best-dish-api");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
// });

app.use(express.json());
app.use(dishRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`BESTDISH listening at http://localhost:${port}`);
});
