import mongoose from "mongoose";

export default function () {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DB_URI, {}).then(
      (connection) => {
        console.log("mongoose successfully connected.");
        resolve(connection);
      },
      (err) => {
        console.error("err", err);
        reject(err);
      }
    );
  });
}
