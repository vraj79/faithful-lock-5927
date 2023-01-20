require("dotenv").config();
const jwt = require("jsonwebtoken");
const adminAuth = (req, res, next) => {
  const token = req.headers.admintoken;
  if (token) {
    const decoded = jwt.verify(token, process.env.KEY);
    if (decoded) {
      const adminID = decoded.adminID;
      next();
    } else {
      res.send({ msg: "Please login First" });
    }
  } else {
    res.send({ msg: "Please login First" });
  }
};
module.exports = adminAuth;
