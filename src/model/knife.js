const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const knife = new Schema({
  name: String,
  data:Array,
});

module.exports = mongoose.model("knife", knife);
