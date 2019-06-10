require('dotenv').config()
var db = require("../models/");
const express = require("express");
var app = express();

////AWS stuff////
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

AWS.config.update({
  region: "us-east-2",
  accessKeyId: process.env.TRUFFLES_Access_Key_ID,
  secretAccessKey: process.env.TRUFFLES_Secret_Access_Key
});

const s3 = new AWS.S3();

AWS.config.setPromisesDependency(bluebird);
console.log(AWS.config);



const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_Bucket,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).on('httpUploadProgress', function (evt) {
    var progress = Math.round(evt.loaded / evt.total) * 100;
    console.log('The progress ia '+progress);

}).
send(function (err, data) {
  console.log("----------");
    console.log(err, data);

    //handle error
    if (err) {
        console.log("Error", err);
        req.flash('error_msg', 'failed to upload the file meta-data');
        // res.redirect('/upload');
    }

    //success
    if (data) {
        console.log("Uploaded in:", data.Location); //url of the file on amazon s3

    }
});

}

app.post('/image-upload', (request, response) => {
  const form = new multiparty.Form();
  var uuid;
    form.on('field', function(name, value) {
      if (name === 'uuid') {
        uuid = value;
      }
      
  });
    form.parse(request, async (error, fields, files) => {
      
      if (error) throw new Error(error);
      try {
        
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        // const timestamp = Date.now().toString();
        const fileName = `Truffle-proto-library/${uuid}-lg`;
        const data = await uploadFile(buffer, fileName, type);

        console.log("This is the" + data);

        return response.status(200).send(data);
      } catch (error) {
        return response.status(400).send(error);
      }
    });
});


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