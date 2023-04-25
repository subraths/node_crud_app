import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  age: Number,
});

export const user = model("posts", userSchema);
