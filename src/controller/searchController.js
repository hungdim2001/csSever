const weapon = require("../model/weapon");
//http://localhost:3000/category/search?key=bayonet%20doppler

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}
class SearchController {
  index(req, res, next) {
    weapon.find().exec(function (err, result) {
      let weapon = [];
      let search =req.query.key.toLowerCase();
      console.log(search);
      if (!err) {
        for (let i = 0; i < result.length; i++) {
          weapon = weapon.concat(result[i].data);
        }
        weapon = weapon.filter(function (item) {
          let resultSearch =item.name.toLowerCase()

          if (resultSearch.includes(search)) return item;
        });
        res.json(weapon);
      } else res.status(404).json({ err: "error" });
    });
  }
}
module.exports = new SearchController();
