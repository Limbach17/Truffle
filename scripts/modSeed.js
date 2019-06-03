const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Truffle"
);

const moderatorSeed = [
    {
     route_name: "Limbach17",
     first_name: "Matthew",
     last_name: "Limbach",
     email: "truffle.app@gmail.com",
     phone: "(412) 389-0641",
     admin_since: Date()
    }
];

db.Moderator
  .remove({})
  .then(() => db.Moderator.collection.insertMany(moderatorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
