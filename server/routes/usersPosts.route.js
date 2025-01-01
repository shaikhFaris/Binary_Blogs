import express from "express";
import userPostsController from "../controller/userPostsController.js";
const router = express.Router();

router.get("/", userPostsController);

export default router;
