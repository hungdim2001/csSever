const jwt = require("jsonwebtoken");
const Users = require("../model/user");
class TokenController {
  async index(req, res) {
    const { token } = req.body;
    try {
      const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      if (decode) {
        const _id = decode.userId;
        console.log(_id);
        const user = await Users.findOne({ _id: _id });
        res.json({
          success: true,
          message: "token valid",
          data: user
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "token invalid",
      });
    }
  }
}
module.exports = new TokenController();
