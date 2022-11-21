const mongoose = require('mongoose');

const planSchema = new mongoose.model(
    {
        type: {type: String, require: true},
        charge: {type: String, require: true},
    },
    {timestamp: true}
);

module.exports = mongoose.model("Plan", planSchema);