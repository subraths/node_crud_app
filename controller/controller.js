import { user } from "../models/model.js";

export const getAllPosts = async (req, res) => {
  const users = await user.find();
  console.log(users);
  res.status(200).json(users);
};
