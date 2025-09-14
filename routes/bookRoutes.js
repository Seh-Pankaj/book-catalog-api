const express = require("express");
const {
  getAllBookRecords,
  createBookRecord,
  getBookWithId,
  updateBookRecord,
  deleteBookRecord,
} = require("../controllers/bookController");
const authUser = require("../middleware/authMiddleware");

const router = express.Router();

// GETTERS
// GET BOOK RECORDS
router.get("/", getAllBookRecords);

// GET A BOOK RECORD WITH ID
router.get("/:id", getBookWithId);

// SETTERS
// POST BOOK DETAILS
router.post("/", authUser, createBookRecord);

// UPDATE BOOK DETAILS
router.put("/:id", authUser, updateBookRecord);

// DELETE A BOOK
router.delete("/:id", authUser, deleteBookRecord);

module.exports = router;
