var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LibrarySchema = new Schema({

  name: {
    type: String,
    unique: true
  },
  
  plants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plant"
    }
  ]
});

var Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;