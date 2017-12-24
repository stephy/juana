const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = require("../db/models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/juana",
  {
    useMongoClient: true
  }
);


const units = [
  {
    "unit": 306,
    "rent": 200,
    "tenants": ["Marian Menschig", "Mariana Garcia-Menschig"],
    "manager": true
  },

  {
    "unit": 304,
    "rent": 2295,
    "tenants": ["Robin"]
  },

  {
    "unit": 208,
    "rent": 2000,
    "tenants": ["Don"]
  }
]


db.Unit
  .remove({})
  .then(() => db.Unit.collection.insertMany(units))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
