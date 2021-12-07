const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "9E49C8459CC1FD44");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    console.log(token, decoded, decoded._id, user);

    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send("Authentication is needed");
  }
};

module.exports = auth;
