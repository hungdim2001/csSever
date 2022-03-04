const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const weapon = new Schema({
  name: String,
  data:Array,
});

module.exports = mongoose.model("weapon", weapon);
