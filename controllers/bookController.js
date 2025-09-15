const Book = require("../models/bookModel");

// GET ALL BOOK RECORDS
const getAllBookRecords = async (req, res) => {
  try {
    const bookData = await Book.find().sort({
      createdAt: -1,
    });
    res.status(200).json(bookData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET BOOK DETAILS WITH ID
const getBookWithId = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id || id == ":id") throw Error("Id is required!");
    const book = await Book.findById(id);
    if (!book) throw Error("Book not found!");
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// POST A BOOK RECORD
const createBookRecord = async (req, res) => {
  try {
    const bookRecord = new Book(req.body);
    await bookRecord.save();
    res.status(201).json(bookRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE A BOOK RECORD
const updateBookRecord = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id || id == ":id") throw Error("Id is required!");
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) throw Error("Book not found!");
    res.status(202).json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A BOOK RECORD
const deleteBookRecord = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id || id == ":id") throw Error("Id is required!");
    const deletedRecord = await Book.findByIdAndDelete(id);
    if (!deletedRecord) throw Error("Book Id absent!");
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllBookRecords,
  createBookRecord,
  getBookWithId,
  updateBookRecord,
  deleteBookRecord,
};
