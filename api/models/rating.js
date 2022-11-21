const mongoose = require('mongoose');

const ratingSchema = new mongoose.model(
    {
        rating: {type: Number, require: true},
        list_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "rating_User",
            require: true
        }
    },
    {timestamp: true}
);

module.exports = mongoose.model("Rating", ratingSchema);