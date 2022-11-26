const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    name: {type: String, require: true},
    img: { type: String },
    DOB: {type: String},
    country: {type: String},
    gender: {type: Boolean, default: false},
    desc: { type: String },
},
    {timestamps: true}
);

module.exports = mongoose.model("Director",directorSchema);