// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("ERROR:", error);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!", err);
  });

// Alternate way to connect db & express using IFFE function
/* 
import express from "express";
const app = express();


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR:", error);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }

  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
  });
})();
*/
