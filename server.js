const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./app/routes");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(routes);

mongoose.connect('mongodb://localhost/juana', 
  { useMongoClient: true }
);
mongoose.Promise = global.Promise;

app.listen(3000, function() {
  console.log("Server running on port 3000");
})
