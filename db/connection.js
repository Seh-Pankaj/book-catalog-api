const mongoose = require("mongoose");

const USER = process.env.USER || "filler";
const PASS = process.env.PASS || "filler";

const uri = `mongodb+srv://${USER}:${PASS}@maindb.savq0je.mongodb.net/booksDB`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connection to DB successful");
  } catch (error) {
    console.log("Connection to DB failed", error.errorResponse.errmsg);
  }
};

module.exports = connectDB;
