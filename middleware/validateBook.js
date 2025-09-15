const { body, validationResult } = require("express-validator");

const validateBook = [
  body("title")
    .notEmpty()
    .withMessage("Book Title cannot be empty")
    .isLength({ min: 3 })
    .withMessage("Title length should be more than 3"),

  body("author")
    .notEmpty()
    .withMessage("Author name cannot be empty")
    .isLength({ min: 3 })
    .withMessage("Author name length should be more than 3"),
  body("genre").notEmpty().withMessage("Genre cannot be empty"),

  body("price")
    .notEmpty()
    .withMessage("Price cannot be empty")
    .isFloat({ min: 10 })
    .withMessage("Price cannot be less than $10"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
  },
];

module.exports = validateBook;
