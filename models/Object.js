const mongoose = require("mongoose");

const objectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add name"],
  },
  age: {
    type: Number,
    required: [true, "please enter a valid age"],
  },
  address: {
    type: String,
    required: [true, "please enter a valid address"],
  },
});

module.exports = mongoose.model("ObjectSchema", objectSchema);
