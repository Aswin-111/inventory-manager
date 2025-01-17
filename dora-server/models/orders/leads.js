const mongoose = require("../config");

const dataSchema = mongoose.Schema({
  name: String,
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  leadowner: String,
  rating: String,
  status: String,
  note: String,
});

module.exports = mongoose.model("data", dataSchema);
