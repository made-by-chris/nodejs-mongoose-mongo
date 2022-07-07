import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
const PORT = process.env.PORT || 8000;

//// MONGOOSE SCHEMA AND MODEL
const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  email: String,
  country: String,
});

const User = new mongoose.model("user", userSchema);

// INSTANTIATION OF OUR DATABASE CONNECTION
mongoose.connect(process.env.DB_URI, {}).then(
  () => {
    console.log("mongoose successfully connected.");
  },
  (err) => {
    console.error("err", err);
  }
);

// API SET UP
const app = express();

// API USER ROUTES
app.get("/", (req, res) => res.send("hello"));
app.get("/users", (req, res) => User.find({}).then((data) => res.json(data)));

app.use(express.json());
app.post("/users", (req, res) => {
  const user = req.body;
  User.create(user).then((data) => res.json(data));
});

// START LISTENING
app.listen(PORT, () =>
  console.log("express API listening on http://localhost:" + PORT)
);
