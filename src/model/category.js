const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const category = new Schema({
  name: String,
  viewBox:String,
  data:Array,
  path:String
});

module.exports = mongoose.model("category", category);
