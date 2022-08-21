import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
