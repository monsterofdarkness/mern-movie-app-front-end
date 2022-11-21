const mongoose = require("mongoose");

const receiptsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: True
    },
    create_at: {
        type: String,
        require: true
    },
    expire_at: {
        type: String,
        require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Receipts", receiptsSchema);
