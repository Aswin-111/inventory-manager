const mongoose = require("../config");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  password: String,
  role: String,
});

module.exports = mongoose.model("users", userSchema);
