const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI || rocess.env.MONGODB_URI.pro;

const conn = () => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("error occured: ", err);
      } else {
        console.log("connected");
      }
    }
  );
};

module.exports = conn;
