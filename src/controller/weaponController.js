const weapon = require("../model/weapon");
//http://localhost:3000/category/weapon?name=Classic%20Knife&sort=up
class WeaponController {
  index(req, res, next) {
    weapon.find({ name: req.query.name }).exec(function (err, weapon) {
        if (weapon[0]) {
            if (!err) {
              weapon[0].data.sort(function (a, b) {
                if (req.query.sort == "up") {
                  if (a.price < b.price) return -1;
                  if (a.price > b.price) return 1;
                  return 0;
                } else if (req.query.sort == "down") {
                  if (a.price > b.price) return -1;
                  if (a.price < b.price) return 1;
                  return 0;
                } else {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  return 0;
                }
              });
              res.json(weapon[0].data);
            } else res.status(404).json({ err: "error" });
          } else res.status(404).json({ err: "error" });
    });
  }
}
module.exports = new WeaponController();
