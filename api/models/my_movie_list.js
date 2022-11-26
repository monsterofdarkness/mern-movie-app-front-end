const mongoose = require("mongoose");

const myMovieListSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true
    },
    content:{type:Array}
  },
  { timestamps: true }
);

module.exports = mongoose.model("My_Movie_List", myMovieListSchema);