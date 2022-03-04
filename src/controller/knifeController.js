const knife = require("../model/knife");
//http://localhost:3000/category/knife?name=Bowie&sort=up
class KnifeController {
  index(req, res, next) {
    knife.findOne({},)
  }
}
module.exports = new KnifeController();
