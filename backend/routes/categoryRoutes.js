import express, { Router, request, response } from "express";
import { Category } from "../models/categoryModel.js";

const router = Router();
/**
 * Add a new category post: /categories
 */
router.post("/", (request, response) => {
  try {
    if (!request.body.name) {
      return response.status(400).send("Provide Category name");
    }
    const newCategory = request.body;
    const result = Category.create(newCategory);
    return response.status(201).send("Category added Succesfully");
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

/**
 * Update a category post: /categories
 */
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    if (!request.body.name) {
      return response.status(400).send("Provide Category name");
    }
    const result = await Category.findByIdAndUpdate(id, request.body);
    return result
      ? response.status(200).send("Category Updated Succesfully")
      : response.status(404).send("Category not found");
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

/**
 * List all categories get: /categories
 */

router.get("/", async (request, response) => {
  try {
    const categories = await Category.find({});
    return response.status(200).json(categories);
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

/**
 * Show a category get: /categories/:id
 */

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const category = await Category.findById(id);
    return response.status(200).json(category);
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

/**
 * Delete a category delete: /categories/:id
 */

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Category.findByIdAndDelete(id);
    return result
      ? response.status(200).send("Category deleted successfully")
      : response.status(404).send("Category not found");
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});
export default router;
