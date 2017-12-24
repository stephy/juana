let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let unitSchema = new Schema({

  unit: {
    type: Number,
    trim: true
  },

  rent: {
    type: Number,
    trim: true
  },

  manager: {
    type: Boolean,
    default: false
  },

  vacant: {
    type: Boolean,
    default: false
  },

  last_modified: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Unit", unitSchema);
