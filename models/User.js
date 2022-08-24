import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
