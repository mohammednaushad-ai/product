const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/crud";
// const MONGO_URI = "mongodb://127.0.0.1:27017/crud";

const ConnectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = ConnectToMongo;
