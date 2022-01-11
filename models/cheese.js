// Require dependencies
const mongoose = require("mongoose");

// Shorter Schema variable
const Schema = mongoose.Schema;

// Set up Schema
const cheeseSchema = new Schema(
  {
    variety: String,
    flavor: String,
    origin: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cheese", cheeseSchema);
