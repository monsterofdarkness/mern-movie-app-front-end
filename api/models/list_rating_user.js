const mongoose = require('mongoose');

const ratingUserSchema = new mongoose.model(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
        total_user:{
            type: Number,
            require:true
        }
    },
    {timestamp: true}
);

module.exports = mongoose.model("rating_User", ratingUserSchema);