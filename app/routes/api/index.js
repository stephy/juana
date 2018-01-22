const router = require("express").Router();
const unitRoutes = require("./units");
const rentRoutes = require("./rents");

router.use("/units", unitRoutes);
router.use("/rent", rentRoutes);


module.exports = router;