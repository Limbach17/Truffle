const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

////this is where I started adding mongo stuff////

const mongoose = require("mongoose");

var db = require("./models");

mongoose.connect("mongodb://localhost/Truffle", { useNewUrlParser: true });

/////////////


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
