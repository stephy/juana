let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({

  username: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },

  email: {
    type: String,
    lowercase: true,
    required: true
  }

  first_name: {
    type: String,
    trim: true
  },

  last_name: {
    type: String,
    trim: true
  }

  creation_date: {
    type: Date,
    default: Date.now
  }

  password_hash: {
    type: String,
    required: true
  }

})