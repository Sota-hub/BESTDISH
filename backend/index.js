const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.send("Home dir");
});

app.get("/api", (req, res) => {
  res.json({ message: "Back end" });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
