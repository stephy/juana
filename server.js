const fs          = require("fs");
const path        = require("path");
const morgan      = require("morgan");
const express     = require("express");
const winston     = require("winston");
const passport    = require("passport");
const mongoose    = require("mongoose");
const bodyParser  = require("body-parser");
const session     = require("express-session");
const cookieParser = require("cookie-parser");
const flash       = require("connect-flash");

const routes      = require("./app/routes");
const helpers     = require("./app/utils/helpers");
const PORT        = process.env.PORT || 3001

// require("./app/config/passport")(passport);

// Creating Express App
const app = express();

// ========================================================
// HTTP ACCESS LOGGER SETUP ===============================
// ========================================================

// Creates Log dir if it does not exist
helpers.checkDirectorySync("./logs");

// create a write stream (in append mode)
let accessLogStream = fs.createWriteStream(
  path.join(__dirname, './logs/access.log'),
  {flags: 'a'}
);

app.use(morgan('combined', {stream: accessLogStream}))

// ========================================================
// WINSTON LOGGER SETUP ===================================
// ========================================================

// TODO: set up Winston here

// ========================================================
// MIDDLEWARE SETUP =======================================
// ========================================================

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// PASSPORT SETUP

app.use(session({ 
  secret: "DEADHORSEBATTERY", 
  resave: true, 
  saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// ========================================================
// ROUTING SETUP ==========================================
// ========================================================

// Loading Routes
app.use(routes);

// ========================================================
// DATABASE SETUP =========================================
// ========================================================

mongoose.connect('mongodb://localhost/juana');
mongoose.Promise = global.Promise;

app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`);
})
