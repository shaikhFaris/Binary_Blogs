import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  hashedPassword: String,
  refreshToken: String,
});

const userModel = mongoose.model("userBlogs", userSchema);
export default userModel;
