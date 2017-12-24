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
    "unit": 201,
    "rent": 2200,
    "tenants": ["Judith Suarez", "Alan Suarez"],
    "lease_start": "2017-10-06"
  },
  {
    "unit": 202,
    "rent": 2295,
    "vacant": true
  },
  {
    "unit": 203,
    "rent": 1830,
    "tenants": ["Michael Bolano", "Michael Godanis"],
    "lease_start": "2009-08-01"
  },
  {
    "unit": 204,
    "rent": 1798,
    "tenants": ["Leonard A. Jones"],
    "lease_start": "2003-09-15"
  },
  {
    "unit": 205,
    "rent": 1317,
    "tenants": ["Sherman W. Lee"],
    "lease_start": "2005-02-10"
  },
  {
    "unit": 206,
    "rent": 1495,
    "tenants": ["Chancai Zhong"],
    "lease_start": "2002-11-21"
  },
  {
    "unit": 207,
    "rent": 1712,
    "tenants": ["Daphne Barnett"]
  },
  {
    "unit": 208,
    "rent": 1450,
    "tenants": ["Donald Contaxis"]
  },
  {
    "unit": 209,
    "rent": 1690,
    "tenants": ["Johanna Jones"]
  },
  {
    "unit": 210,
    "rent": 1722,
    "tenants": ["Augustina Fernandes", "Salozinho Fernandes"]
  },
  {
    "unit": 301,
    "rent": 1980,
    "tenants": ["Jay Spencer Maney"]
  },
  {
    "unit": 302,
    "rent": 2175,
    "tenants": ["A. Sadiqi"]
  },
  {
    "unit": 303,
    "rent": 1867,
    "tenants": ["Robert Agnello", "Misty Carlson"]
  },
  {
    "unit": 304,
    "rent": 2495,
    "tenants": ["Jiuzhen Pan", "Li Hui"]
  },
  {
    "unit": 305,
    "rent": 1746,
    "tenants": ["Alan Quisenberry"]
  },
  {
    "unit": 306,
    "rent": 200,
    "tenants": ["Marian Menschig", "Mariana Garcia-Menschig"],
    "manager": true
  },
  {
    "unit": 307,
    "rent": 1605,
    "tenants": ["Karly E. Lee-Figueroa"]
  },
  {
    "unit": 308,
    "rent": 1850,
    "tenants": ["Laura Castro", "Robin Garnham"]
  },
  {
    "unit": 309,
    "vacant": true
  },
  {
    "unit": 310,
    "rent": 2119,
    "tenants": ["Elaiza Rosario", "Carlo Padilla"]
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
