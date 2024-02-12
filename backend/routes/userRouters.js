import mongoose from "mongoose";
import express, { Router, request, response } from "express";
import {User} from '../models/userModel.js'

const router = Router();
router.get("/users", (request, response) => {
  const users = User.find({})
});
