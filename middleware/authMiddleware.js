const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authUser = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ error: "Auth Token is Required!" });

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(id);

    if (!user) {
      return res
        .status(403)
        .json({ error: "User not found, request unauthorized!" });
    }
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid Auth Token" });
  }
};

module.exports = authUser;
