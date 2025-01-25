import express from "express";
import userPostsController from "../controller/userPostsController.js";
import { draftSubmitController } from "../controller/postsSubmitController.js";
const router = express.Router();

router.get("/", userPostsController);
router.post("/submit/drafts", draftSubmitController);

export default router;
