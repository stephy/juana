const fs          = require("fs");
const path        = require("path");
const express     = require("express");
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");
const morgan      = require("morgan");
const routes      = require("./app/routes");


// Creating Express App
const app = express();

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

mongoose.connect('mongodb://localhost/juana', 
  { useMongoClient: true }
);
mongoose.Promise = global.Promise;

app.listen(3001, function() {
  console.log("Server running on port 3000");
})
