const mongoose = require('mongoose');

const seriesSchema = new mongoose.model(
    {
    name: {type: String, require: true},
    total_epi: {type: Number},
    status: {type: String},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Series", seriesSchema);