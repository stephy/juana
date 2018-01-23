const router = require("express").Router();
const api = require("./api");
const auth = require("./auth");

// API routes
router.use("/api", api)
// Authentication routes
router.use("/auth", auth);

// If no API routes are hit, send the React app
/*
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
*/


module.exports = router;
