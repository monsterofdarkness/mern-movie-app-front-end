const mongoose = require('mongoose');

const favoriteGenreSchema = new mongoose.Model(
    {
        list_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List',
            require: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
    }
);

module.exports = mongoose.model("Favorite_Genre", favoriteGenreSchema);