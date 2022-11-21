const mongoose = require('mongoose');

const episodeSchema = new mongoose.Model(
    {
        movie_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
            require: true
        },
        series_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Series',
            require: true
        },
    }
);

module.exports = mongoose.model("Episode", episodeSchema);