class SiteController {
  index(req, res) {
    res.json("siteController");
  }
}
module.exports = new SiteController();