const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/best-dish-api");

// ==============================================================================
// const Grid = require("gridfs-stream");
// const gfs = new Grid(db, mongoose.mongo);

// const writeStream = gfs.createWriteStream({
//   filename: "mainBackGround.jpg",
// });
// fs.createReadStream("../../../frontend/public/bg-1.jpg").pipe(writeStream);

// writeStream.on("error", function (err) {
//   console.log("An error occurred!", err);
//   throw err;
// });

// writeStream.on("close", function (file) {
//   console.log(`${file.filename} written to db `);
// });

// readStream.pipe(response);
// ===============================================================================

const dishSchema = new mongoose.Schema({
  postUserId: String,
  dishName: String,
  evaluation: Number,
  price: Number,
  location: String,
  description: String,
  saved: Number,
  visited: Number,
  postDate: Date,
});

const Dish = mongoose.model("Dish", dishSchema);

const hamburger = new Dish({
  postUserId: "a1b2c3",
  dishName: "hamburger",
  evaluation: 4,
  price: 10,
  location: "Texas",
  description: "This is good hamburger",
  saved: 10,
  visited: 30,
  postDate: new Date(),
});
const pasta = new Dish({
  postUserId: "d4e5f6",
  dishName: "pasta",
  evaluation: 3,
  price: 13,
  location: "Pali",
  description: "This is good pasta",
  saved: 8,
  visited: 20,
  postDate: new Date(),
});
const tacos = new Dish({
  postUserId: "g7h8i9",
  dishName: "tacos",
  evaluation: 3.5,
  price: 15,
  location: "Mexico city",
  description: "This is good tacosC",
  saved: 34,
  visited: 765,
  postDate: new Date(),
});
const ramen = new Dish({
  postUserId: "j10k11",
  dishName: "ramen",
  evaluation: 4,
  price: 10,
  location: "Tokyo",
  description: "This is good ramen",
  saved: 90,
  visited: 130,
  postDate: new Date(),
});
const curry = new Dish({
  postUserId: "l12m13",
  dishName: "curry",
  evaluation: 4,
  price: 10,
  location: "delly",
  description: "This is good curry",
  saved: 100,
  visited: 200,
  postDate: new Date(),
});

// hamburger.save().then(() => console.log(hamburger));
// pasta.save().then(() => console.log(pasta));
// tacos.save().then(() => console.log(tacos));
// ramen.save().then(() => console.log(ramen));
// curry.save().then(() => console.log(curry));
