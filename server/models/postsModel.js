import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    blogs: [
      {
        title: { type: String, required: true, trim: true },
        content: { type: String, required: true },
        tags: [{ type: String }],
        category: { type: String },
        publishedAt: { type: Date, default: Date.now },
      },
    ],
    author: { type: String, required: true },
  },
  { timestamps: true }
);

const postsModel = mongoose.model("userPosts", postsSchema);
export default postsModel;
