import mongoose from "mongoose";

const categoryModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "category.png",
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model("Category", categoryModel);
