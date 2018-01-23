const router = require("express").Router();
const passport = require("passport");

router.get("/user", function(req, res) {
  res.json({"test": "value"})
})


module.exports = router;