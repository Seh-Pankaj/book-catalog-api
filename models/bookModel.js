const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: String,
      default: true,
    },
  },
  { timestamps: true }
);

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;
