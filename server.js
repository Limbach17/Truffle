const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const router = require("./routes/routes");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Truffle", { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
