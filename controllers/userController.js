const User = require("../models/userModel.js");
const createToken = require("../utils/token.js");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email.toLowerCase(), password);
    const jwToken = createToken(user._id);
    res.status(202).json({ email, jwToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.signup(name, email.toLowerCase(), password);
    res.status(201).json({ name, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
