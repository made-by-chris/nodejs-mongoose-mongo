import express from "express";
import "dotenv/config";
const PORT = process.env.PORT || 8000;
import connectToDatabase from "./models/index.js";
import userRouter from "./routers/user.js";

//// MONGOOSE SCHEMA AND MODEL

// INSTANTIATION OF OUR DATABASE CONNECTION
connectToDatabase().then(() => {
  // API SET UP
  const app = express();
  // API USER ROUTES
  app.use(express.json());
  app.get("/", (req, res) => res.send("hello"));
  app.use("/users", userRouter);
  // START LISTENING
  app.listen(PORT, () =>
    console.log("express API listening on http://localhost:" + PORT)
  );
});
