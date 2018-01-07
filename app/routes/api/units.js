const router = require("express").Router();
const Unit = require("../../db/models/unit");

// ========================================================
// UNIT ROUTES ============================================
// ========================================================


// Matches '/api/units/all'
router.get("/all", function(req, res) {
  Unit.find()
    .then(function(units) {
      res.json(units);
    })
    .catch(function(err) {
      res.json(err);
    })
})

// Matches 'api/units/:id'
router.get("/:unitId", function(req, res) {
  Unit.findOne({ "unit": req.params.unitId})
    .then(function(unit) {
      res.json(unit);
    })
    .catch(function(err) {
      res.json(err);
    })
})

// Matches 'api/units/add'
router.post("/add", function(req, res) {
  Unit.create({ unit: req.body.unit, rent: req.body.rent })
    .then(function(unit) {
      res.json(unit);
    })
    .catch(function(err) {
      res.json(err);
    })
})

// Updating a unit
// TODO: requires update
router.route("/update/:id")
  .post(function(req, res) {
    res.send(`Updating unit #${req.params.id}`);
  })

// Removes an existing unit
// Matches '/api/units/remove/:unitId"'
router.get("/remove/:unitId", function(req, res) {
  Unit.remove({ "unit": req.params.unitId })
    .then(function(unit) {
      res.json(unit);
    })
    .catch(function(err) {
      res.json(err);
    })
})

module.exports = router;
