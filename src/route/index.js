const siteRouter = require("./site");
const categoryRouter = require("./category");
const registerRouter = require("./register");
const loginRouter = require("./login");
const tokenRouter = require("./token");
function route(app) {
  app.use("/token", tokenRouter);
  app.use("/login", loginRouter);
  app.use("/register", registerRouter);
  app.use("/category", categoryRouter);
  app.use("/", siteRouter);
}
module.exports = route;
