var db = require("../models/");

const express = require("express");
var app = express();

//////// CREATE A NEW LIBRARY //////////

db.Library.create({ name: "truffle-proto-library" })
  .then(function(dbLibrary) {
    console.log(dbLibrary);
  })
  .catch(function(err) {
    console.log(err.message);
  });

//////// RETRIEVE A SPECIFIC LIBRARY //////////

app.get("/libraries", function(req, res) {
  db.Library.find({}).sort({name: 1})
    .then(function(dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//////// RETRIEVE A ONLY POPULATED LIBRARIES //////////

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

//////// RETRIEVE THE TRUFFLE PROTOTYPE LIBRARY //////////

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

//////// RETRIEVE ALL PLANTS FROM THE DATABASE //////////

app.get("/plants", function(req, res) {
  db.Plant.find({})
    .then(function(dbPlant) {
      res.json(dbPlant);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//////// RETRIEVE A SPECIFIC PLANT BY ID //////////


app.get("/plant/:id", function(req, res) {
  const plantId = req.params.id;
  db.Plant.find({id: plantId})
    .then(function(dbPlant) {
      res.json(dbPlant);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//////// RETRIEVE ALL GENIUSES STARTING WITH A SPECIFIC LETTER //////////

app.get("/genus/:letter", function(req, res) {
  const letter = req.params.letter;
  var letterString = new RegExp("^" + letter);
  console.log(letterString);
  db.Plant.find({genus: letterString}).sort({scientific_name :1})
    .then(function(dbPlant) {
      res.json(dbPlant);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//////// CREATE A NEW PLANT ENTRY //////////

app.post("/plants", function(req, res) {
  console.log(req.body);
  console.log("Hello");
  db.Plant.create(req.body)
    // .then(function(dbPlant) {
    //   return db.Library.findOneAndUpdate({name: "truffle-proto-library"}, { $push: { plants: dbPlant._id } }, { new: true });
    // })
    .then(function(dbLibrary) {
      res.json(dbLibrary);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = app;