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

bookSchema.statics.findDuplicateTitle = async (title) => {
  const exists = await Book.findOne({ title });
  if (exists) throw Error("Book already present with same title!");
};

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;
