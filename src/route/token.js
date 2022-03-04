const express = require("express");
const router = express.Router();
const token = require("../controller/tokenController");
router.post("/", token.index);
module.exports = router;
