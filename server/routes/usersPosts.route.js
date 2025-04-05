import express from "express";
import userPostsController from "../controller/userPostsController.js";
import {
  draftSubmitController,
  blogsPublishController,
} from "../controller/postsSubmitController.js";
import {
  deleteDraftsController,
  deletePublishController,
} from "../controller/deleteController.js";

const router = express.Router();

router.get("/", userPostsController);

router.post("/submit/drafts", draftSubmitController);
router.post("/submit/publishBlogs", blogsPublishController);

router.delete("/submit/drafts", deleteDraftsController);
router.delete("/submit/publishBlogs", deletePublishController);

export default router;
