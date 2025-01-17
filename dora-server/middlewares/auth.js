const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization;
    if (token) {
      const decoded = jwt.verify(token, "dorakart_key");
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {}
};
