const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");
const validateUser = require("../middleware/validateUser");
const router = express.Router();

// LOGIN
router.post("/login", loginUser);

// SIGNUP
router.post("/register", validateUser, signupUser);

module.exports = router;
