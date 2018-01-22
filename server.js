const fs          = require("fs");
const path        = require("path");
const express     = require("express");
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");
const morgan      = require("morgan");
const winston     = require("winston");
const routes      = require("./app/routes");
const helpers     = require("./app/utils/helpers");

// TODO: setup winston here

// Creating Express App
const app = express();

// Creates Log dir if it does not exist
helpers.checkDirectorySync("./logs");

// create a write stream (in append mode)
let accessLogStream = fs.createWriteStream(
  path.join(__dirname, './logs/access.log'),
  {flags: 'a'}
);

app.use(morgan('combined', {stream: accessLogStream}))

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Loading Routes
app.use(routes);

mongoose.connect('mongodb://localhost/juana');
mongoose.Promise = global.Promise;

app.listen(3001, function() {
  console.log("Server running on port 3000");
})
