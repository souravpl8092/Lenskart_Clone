const mongoose = require("mongoose");

const connect = mongoose.connect(
  `mongodb+srv://tirthoraj:tirthoraj@cluster0.8in0lf2.mongodb.net/glasscart?retryWrites=true&w=majority`
);

module.exports = { connect };
