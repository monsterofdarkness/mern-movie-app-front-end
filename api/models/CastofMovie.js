const mongoose = require("mongoose");

const CastofMovieSchema = new mongoose.Schema(
  {
    cast_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cast',
        require: true
    },

    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        require: true
    },

    role: {
        type: String,
        require: true
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("CastofMovie", CastofMovieSchema);
