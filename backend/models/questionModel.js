import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    answer1: {
      type: String,
      required: true,
    },
    answer2: {
      type: String,
      required: true,
    },
    answer3: {
      type: String,
      required: true,
    },
    answer4: {
      type: String,
      required: true,
    },
    correct: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model("Question", questionSchema);
