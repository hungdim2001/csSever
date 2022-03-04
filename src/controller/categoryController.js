const category = require("../model/category");
class CategoriesController {
  index(req, res, next) {
    category.find({}, function (err, category) {
      if (!err) res.json(category);
      else res.status(404).json({ err: "error" });
    });
  }
}
module.exports = new CategoriesController();
