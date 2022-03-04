const mongoose = require("mongoose");
async function connect() {
  try {
    // console.log(process.env.USER);
    await mongoose.connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASS}@csmoney.sfzk3.mongodb.net/CSmoney?retryWrites=true&w=majority`
    );
    console.log("connect success");
  } catch (error) {
    console.log("connect error");
  }
}
module.exports = { connect };
