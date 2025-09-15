const { body, validationResult } = require("express-validator");

const validateUser = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Username cannot be empty")
    .isLength({ min: 3 })
    .withMessage("Username length should be more than 3"),

  body("email").trim().isEmail().withMessage("Please correct email format"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password length should be more than 6"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  },
];

module.exports = validateUser;
