require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT ||3000;
var bodyParser = require("body-parser");
const db = require("./src/config/db/index");
var route = require("./src/route/index");
var cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
db.connect();
app.use(cors());
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
