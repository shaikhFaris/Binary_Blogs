import postsModel from "../models/postsModel.js";

const deleteDrafts = async (req, res) => {
  if (!req.user) return res.sendStatus(401);
  try {
    // const postTobeDeleted
    // postsModel.findOneAndDelete({ "drafts.blogId": req.body.editedBlog },)
    const temp = await postsModel.findOneAndUpdate(
      { "drafts.blogId": req.body.editedBlog },
      { $pull: { drafts: { blogId: req.body.editedBlog } } },
      { new: true }
    );
    console.log(temp);
  } catch (error) {}
};
