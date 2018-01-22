const router = require("express").Router();
const Rent = require("../../db/models/rent");

// ========================================================
// RENT ROUTES ============================================
// ========================================================

// Matches GET '/api/rent/YYYYMM'
router.get("/:period", function(req, res) {

  // TODO: find out why the unit is not populated as expected
  Rent.find({ rent_period: req.params.period })
    .populate("units")
    .then(function(rent) {
      res.json(rent)
    })
    .catch(function(err) {
      res.json(err);
    })
})

// Matches POST '/api/rent/YYYYMM'
router.post("/:period", function(req, res) {

  Rent.create({
    rent_period: req.params.period,
    unit: req.body.unit,
    paid: req.body.paid,
    paid_date: new Date()
  })
  .then(function(rent) {
    res.json(rent);
  })
  .catch(function(err) {
    res.json(err);
  })

})

module.exports = router;