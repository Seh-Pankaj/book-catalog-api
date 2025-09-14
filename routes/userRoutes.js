const express = require("express");
const { loginUser, signupUser } = require("../controllers/userController");
const router = express.Router();

// LOGIN
router.post("/login", loginUser);

// SIGNUP
router.post("/register", signupUser);

module.exports = router;
