const argon2 = require("argon2");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

class UserController {
  async register(req, res) {
    // register
    const { username, password, mail } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user) {
        return res
          .status(400)
          .json({ success: false, message: "user already taken" });
      } else {
        const hashPassword = await argon2.hash(password);
        const newUser = new User({
          username: username,
          password: hashPassword,
          mail: mail,
        });
        await newUser.save();
        res.json({ success: true, message: "user created successfully" });
      }
    } catch (error) {
      res.status(400).json({ err: error });
    }
  }

  // log in
  async login(req, res) {
    const { username, password, mail } = req.body;
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "user or password incorrect" });
      } else {
        const passwordValid = await argon2.verify(user.password, password);
        console.log(passwordValid);
        if (!passwordValid)
          return res.status(400).json({
            success: false,
            message: "user or password incorrect",
          });
        const accessToken = jwt.sign(
          { userId: user._id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1h" }
        );
        return res.json({
          success: true,
          message: "login successfully",
          accessToken,
        });
      }
    } catch (error) {
      res.status(400).json({ err: error });
    }
  }
}
module.exports = new UserController();
