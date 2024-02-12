import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    username: {
      type: "String",
      required: true,
    },
    password: {
      type: "String",
      required: true,
    },
    type: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
