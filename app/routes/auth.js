const router = require("express").Router();
const passport = require("passport");


// Matches GET '/auth/user'
router.get("/user", function(req, res) {
  res.json({"test": "value"})
})

// Matches POST '/auth/login'
router.post("/login", function(req, res) {
  // do something
})

// Matches POST '/auth/register'
router.post("/register", function(req, res) {
  // do something
})

// Matches GET '/auth/logout'
router.get("/logout", function(req, res) {
  // do something
})

module.exports = router;