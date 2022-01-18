const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose.connect(`${process.env.MONGO_DB_URL}`);
};

module.exports = connectDb;
