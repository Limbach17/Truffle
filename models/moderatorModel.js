var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var moderatorSchema = new Schema({

    route_name: {
        type: String,
        requied: true,
        unique: true
    },

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    email: {
        type: regex,
        required: true,
        $regex: /^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9\\-\\.]+)\\.([a-zA-Z]{2,5})$/
    },

    phone: {
        type: regex,
        required: true,
        $regex: /^\(?\d{3}\)?[\.\- ]?\d{3}[\.\- ]?\d{4}$/
    },

    amdin_since: {
        type: Date,
        required: true
    },

    S3_user_key: {
        type: String,
    }

});

var Moderator = mongoose.model("Moderator", moderatorSchema);

module.exports = Moderator;