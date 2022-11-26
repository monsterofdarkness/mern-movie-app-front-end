const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema(
  {
    type: {type: String, require: true},
    charge: {type: String, require: true},
    Resolution: {type: String, require: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plan", PlanSchema);
