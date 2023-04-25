import { Router } from "express";
import { getAllPosts } from "../controller/controller.js";

const router = Router();

router.get("/", getAllPosts);

export default router;
