import express, { request, response } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import {cors} from cors;
import { User } from "./models/userModel.js";

const port = process.env.PORT;
const url = process.env.URL;
const dbname = process.env.DATABASE;

const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(request, response)=>{
  return response.status(234).send("Welcome to App")
})

mongoose
  .connect(url, { dbName: dbname })
  .then(() => {
    app.listen(port, (request, response) => {
      console.log(`Running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection Failed", error.message);
  });
