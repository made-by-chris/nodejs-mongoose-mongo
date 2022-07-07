import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  email: String,
  country: String,
});

const User = new mongoose.model("user", userSchema);

export default User;
