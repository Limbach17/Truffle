var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var plantSchema = new Schema({

    route_name: {
        type: String,
        requied: true,
        unique: true
    },

    common_names: {
        type: Array,
        required: true
    },

    scientific_name: {
        type: RegExp,
        requied: true,
        $regex: /^[A-Z][a-z]+ [^A-Z][a-z]+( var\. [a-z]*)?$/
    },

    genus: {
        type: RegExp,
        requied: true,
        $regex: /^[A-Z][a-z]+$/
    },

    species: {
        type: RegExp,
        required: true,
        $regex: /^[^A-Z][a-z]+$/
    },

    tropicos_id: {
        type: int,
        required: true
    },

    moderator: [
        {
          type: Schema.Types.ObjectId,
          ref: "Moderator"
        }
      ]
    
});

var Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;