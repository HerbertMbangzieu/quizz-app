import express, { request, response } from "express";

import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";

import cors from "cors";

import "dotenv/config";
import { User } from "./models/userModel.js";

//Create an express app
const app = express();
const URL = process.env.URL;
const PORT = process.env.PORT;

/**
 * Set the cors policy to allow data access to the Frontend React app
 */
app.use(cors());
/**
 * Make the app accepting the creation of books in json format
 */
app.get("/signin/:email/:password", async (request, response) => {
  const { email, password } = request.params;
  const user = await User.findOne({ email: email, password: password }).exec();

  response.status(200).json(user);
});
app
  .use(express.json())
  /**
   * Use the Routes for books with the middleware '/books'
   */
  .use("/users", userRoutes)

  /**
   * Create the route /
   */
  .get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to Quizz App");
  });

/**
 * Connect the database with Mongoose
 */
mongoose
  .connect(URL, { dbName: "quizz-app" })
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Running on PORT ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection to server failed: " + error);
  });
