const express = require("express");
const mongoose = require("mongoose");
const dishRouter = require("./routers/dish");

mongoose.connect("mongodb://127.0.0.1:27017/best-dish-api");

const app = express();
const port = 3001;

app.use(express.json());
app.use(dishRouter);

app.listen(port, () => {
  console.log(`BESTDISH listening at http://localhost:${port}`);
});
