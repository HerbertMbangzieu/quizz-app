import express, { Router, request, response } from "express";
import { Question } from "../models/questionModel.js";

const router = Router();
/**
 * Add a question post: /questions
 */
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.text ||
      !request.body.answer1 ||
      !request.body.answer2 ||
      !request.body.answer3 ||
      !request.body.answer4 ||
      !request.body.correct ||
      !request.body.category ||
      !request.body.explanation
    ) {
      return response
        .status(400)
        .send({ message: "Please provide all required fields" });
    }
    const newQuestion = {
      text: request.body.text,
      answer1: request.body.answer1,
      answer2: request.body.answer2,
      answer3: request.body.answer3,
      answer4: request.body.answer4,
      correct: request.body.correct,
      category: request.body.category,
      explanation: request.body.explanation,
    };
    const question = await Question.create(newQuestion);
    return response.status(201).send("Question added Successfully");
  } catch (error) {
    return response.status(500).send({ message: error.message });
  }
});

/**
 * list all question get: /questions/
 */
router.get("/", async (request, response) => {
  try {
    const questions = await Question.find({});
    return response.status(200).json(questions);
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
});
/**
 * Show question get: /questions/:id
 */
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const question = await Question.findById(id);
    return question
      ? response.status(200).json(question)
      : response.status(404).send("Question not found");
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
});

/**
 * Update a question put: /questions/:id
 */
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.text ||
      !request.body.answer1 ||
      !request.body.answer2 ||
      !request.body.answer3 ||
      !request.body.answer4 ||
      !request.body.correct ||
      !request.body.category ||
      !request.body.explanation
    ) {
      return response
        .status(400)
        .send({ message: "Please provide all required fields" });
    }
    const { id } = request.params;
    const question = await Question.findByIdAndUpdate(id, request.body);
    return question
      ? response.status(200).send("Question Updated Successfully")
      : response.status(200).send("Question not found");
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
});

/**
 * Delete question delete: /questions/:id
 */
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const question = await Question.findByIdAndDelete(id);
    return question
      ? response.status(200).send("Question Deleted Successfully")
      : response.status(200).send("Question not found");
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
});

export default router;
