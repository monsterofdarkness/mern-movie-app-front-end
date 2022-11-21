const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    genre: { type : Boolean, default: false },
    country: { type: String },
    DOB: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cast", CastSchema);
