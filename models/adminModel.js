var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var adminSchema = new Schema({

    route_name: {
        type: String,
        unique: true
    },

    first_name: String,

    last_name: String,

    email: String,

    
})