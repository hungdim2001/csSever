const express = require("express");
const router = express.Router();
const category =  require('../controller/categoryController')
const knife = require("../controller/knifeController")
const search = require("../controller/searchController")
const weapon = require("../controller/weaponController")
router.get("/knife", knife.index)
router.get("/search", search.index)
router.get("/weapon", weapon.index)
router.get("/", category.index); 
module.exports = router;