const mongoose = require("mongoose");

const USER = process.env.USER || "filler";
const PASS = process.env.PASS || "filler";

const uri = `mongodb+srv://${USER}:${PASS}@maindb.savq0je.mongodb.net/booksDB`;

let isConnected;

const connectDB = async () => {
  if (isConnected) {
    console.log("DB already connected");
    return;
  }

  try {
    const db = await mongoose.connect(uri);
    console.log("Connection to DB successful");
    isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Connection to DB failed", error);
  }
};

module.exports = connectDB;
