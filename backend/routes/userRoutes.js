import { Router } from "express";
const router = Router();

import { User } from "../models/userModel.js";
/**
 * Route to save a new user post: /users
 */

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.email ||
      !request.body.username ||
      !request.body.password ||
      !request.body.type
    ) {
      return response.status(400).send({
        message: "Provide all required fiels: email, username, password,type",
      });
    }

    const newUser = {
      email: request.body.email,
      username: request.body.username,
      password: request.body.password,
      type: request.body.type,
    };

    const user = await User.create(newUser);
    return response.status(201).send(user);
  } catch (error) {
    console.error("The User insertion Failed: ", error.message);
    response.status(500).send({ message: error.message });
  }
});

/**
 * Create a route to get all users get: /users
 */

router.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    console.error("No User found: ", error.message);
    return response.status(500).send({ message: error.message });
  }
});

/**
 * Create a route to get a user details get: /users/:id
 */

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findById(id);
    return response.status(200).json(user);
  } catch (error) {
    console.error("User not found ", error.message);
    return response.status(500).send({ message: error.message });
  }
});

/**
 * Create a route to update a given user put: /users/:id
 */
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.email ||
      !request.body.username ||
      !request.body.password ||
      !request.body.type
    ) {
      return response.status(404).send;
      ({ message: "Please Provide all required fields" });
    }

    const { id } = request.params;
    const result = await User.findByIdAndUpdate(id, request.body);
    return !result
      ? response.status(400).send({ message: "User not found!!" })
      : response.status(200).send({ message: "User Updated Successfully!!" });
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

/**
 * Create a Route to delete a given user delete: /users/:id
 */

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await User.findByIdAndDelete(id);
    return !result
      ? response.status(404).send({ message: "User Not Found" })
      : response.status(200).send({ message: "User Deleted Successfully" });
  } catch (error) {
    console.error({ message: error.message });
    return response.status(500).send({ message: error.message });
  }
});

/**
 * Creae a route to sign in as user: /users/:email/:password
 */
router.get("/signin/:email/:password", async (request, response) => {
  const { email, password } = request.params;
  const user = await User.findOne({ email: email, password: password }).exec();
  return response.status(200).json(user);
});

export default router;
