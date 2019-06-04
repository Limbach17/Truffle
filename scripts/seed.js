const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Truffle"
);

const plantSeed = [

  {
    route_name: "red_maple",
    common_names: ["Red maple"],
    scientific_name: "Acer rubrum",
    genus: "Acer",
    species: "rubrum",
    tropicos_name_id: 200014
  },

  {
    route_name: "sugar_maple",
    common_names: ["Sugar maple"],
    scientific_name: "Acer saccharum",
    genus: "Acer",
    species: "saccharum",
    tropicos_name_id: 200039
  },

  {
    route_name: "white_forsythia",
    common_names: ["White forsythia"],
    scientific_name: "Abeliophyllum distichum",
    genus: "Abeliophyllum",
    species: "distichum",
    tropicos_name_id: 23000016
  },

  {
    route_name: "paper_birch",
    common_names: ["Paper birch"],
    scientific_name: "Betula papyrifera",
    genus: "Betula",
    species: "papyrifera",
    tropicos_name_id: 3600017
  },

  {
    route_name: "river_birch",
    common_names: ["River birch"],
    scientific_name: "Betula nigra",
    genus: "Betula",
    species: "nigra",
    tropicos_name_id: 3600067
  },

  {
    route_name: "false_indigo",
    common_names: ["False indigo"],
    scientific_name: "Baptisia alba",
    genus: "Baptisia",
    species: "alba",
    tropicos_name_id: 13055478
  },

  {
    route_name: "fox_sedge",
    common_names: ["Fox sedge, sedge"],
    scientific_name: "Carex vulpinoidea",
    genus: "Carex",
    species: "vulpinoidea",
    tropicos_name_id: 9900321
  },

  {
    route_name: "beautyberry",
    common_names: ["Beautyberry"],
    scientific_name: "Callicarpa americana",
    genus: "Callicarpa",
    species: "americana",
    tropicos_name_id: 33700896
  },

  {
    route_name: "hackberry",
    common_names: ["hackberry"],
    scientific_name: "Celtis occidentalis",
    genus: "Celtis",
    species: "occidentalis",
    tropicos_name_id: 33300001
  }

];

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

db.Plant
  .deleteMany({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Moderator
  .deleteMany({})
  .then(() => db.Moderator.collection.insertMany(moderatorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
