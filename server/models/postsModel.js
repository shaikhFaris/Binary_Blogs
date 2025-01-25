import mongoose from "mongoose";
import { v4 } from "uuid";

const postsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    blogs: [
      {
        blogId: { type: String, default: v4, immutable: true },
        title: { type: String, required: true, trim: true },
        content: { type: String, required: true },
        tags: [{ type: String }],
        category: { type: String },
        publishedAt: { type: Date, default: Date.now },
      },
    ],
    drafts: [
      {
        blogId: { type: String, default: v4, immutable: true },
        title: { type: String, required: true, trim: true },
        content: { type: String, required: true },
        tags: [{ type: String }],
        category: { type: String },
      },
    ],
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const postsModel = mongoose.model("userPosts", postsSchema);
export default postsModel;
