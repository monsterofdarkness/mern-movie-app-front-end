const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },

    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        require: true
    },

    content: {
        type: String,
        require: true
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
