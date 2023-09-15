const mongoose = require("mongoose");
const messageSchema = mongoose.Schema(
  {
    message: {
      text: String,
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("messages", messageSchema);
module.exports = UserModel;
