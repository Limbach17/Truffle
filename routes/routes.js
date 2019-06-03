var db = require("../models/");

const express = require("express");
var app = express();

db.Library.create({ name: "truffle-proto-library" })
  .then(function(dbLibrary) {
    console.log(dbLibrary);
  })
  .catch(function(err) {
    console.log(err.message);
  });

app.get("/libraries", function(req, res) {
  db.Library.find({}).sort({name: 1})
    .then(function(dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/populated-libraries", function(req, res) {
  db.Library.find().sort({name: 1})
    .populate("plants")
    .then(function(dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/truffle-proto-library", function(req, res) {
  db.Library.find({name: "truffle-proto-library"})
    .populate("plants")
    .then(function(dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/plants", function(req, res) {
  db.Plant.find({})
    .then(function(dbPlant) {
      res.json(dbPlant);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.post("/submit", function(req, res) {
  db.Plant.create(req.body)
    .then(function(dbPlant) {
      return db.Library.findOneAndUpdate({}, { $push: { plants: dbPlant._id } }, { new: true });
    })
    .then(function(dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = app;