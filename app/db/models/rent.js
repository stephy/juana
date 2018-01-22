let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let rentSchema = new Schema({

  rent_period: {
    // should follow format 'YYYYMM' (201801) for January 2018
    type: String,
    trim: true
  },

  unit: {
    type: Schema.Types.ObjectId,
    ref: "Unit"
  },

  paid: {
    type: Boolean,
    default: false
  },

  paid_date: {
    type: Date
  }

})

module.exports = mongoose.model("Rent", rentSchema);