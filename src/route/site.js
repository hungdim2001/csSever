const express = require("express");
const siteController = require("../controller/siteController");
const router = express.Router();
router.get("/", siteController.index);
module.exports = router;
