const router = require("express").Router();
const Unit = require("../../db/models/unit");

router.route("/")
  .get(function(req, res) {
    Unit.find()
    .then(dbModel => res.json(dbModel));
    // TODO: do i need arrow functions here?
  })

// Adding unit
router.route("/add")
  .post(function(req, res) {
    
    Unit.create(
      {
        unit: req.body.unit,
        rent: req.body.rent
      }, function(err, unit) {
        if (err) console.log(err);
        res.send(unit);
      })
  })

// Updating a unit
router.route("/update/:id")
  .post(function(req, res) {
    res.send(`Updating unit #${req.params.id}`);
  })

// Removing a unit
router.route("/remove/:id")
  .post(function(req, res) {
    res.send(`Removing unit #${req.params.id}`);
  })


module.exports = router;
