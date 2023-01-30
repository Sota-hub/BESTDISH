const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const dishRouter = require("./routers/dish");
const userRouter = require("./routers/user");

const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => console.log("Connected!"));
mongoose.connection.on("error", (err) => console.log(err));

const app = express();
const port = process.env.PORT || 8000;

app.use(cors( { origin: "https://bestdish.vercel.app", credentials: true }));
app.use(express.json({ limit: "1.6mb" }));
app.use(express.urlencoded({ limit: "1.6mb", extended: true }));
app.use(express.json());
app.use("/dishes", dishRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, (e) => {
  console.log(`BESTDISH listening at http://localhost:${port}`);
});
