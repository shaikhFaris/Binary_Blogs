import express from "express";
import userPostsController from "../controller/userPostsController.js";
import {
  draftSubmitController,
  blogsPublishController,
} from "../controller/postsSubmitController.js";
const router = express.Router();

router.get("/", userPostsController);
router.post("/submit/drafts", draftSubmitController);
router.post("/submit/publishBlogs", blogsPublishController);

export default router;
