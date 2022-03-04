const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new Schema({
  username: String,
  password:String,
  mail:String,
  // refreshToken: String,
});

module.exports = mongoose.model("user", user);