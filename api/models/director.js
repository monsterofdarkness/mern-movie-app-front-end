const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    name: {type: String, require: true},
    DOB: {type: String},
    country: {type: String},
    gender: {type: Boolean, default: false},
},
    {timestamps: true}
);

module.exports = mongoose.model("Director",directorSchema);