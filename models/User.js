import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  password: String,
  aadharNumber: String,
  voterNumber: String,
});

const User = mongoose.model("User", userSchema);

export default User;
