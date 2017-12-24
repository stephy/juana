const router = require("express").Router();
const unitRoutes = require("./units");

router.use("/units", unitRoutes);

module.exports = router;