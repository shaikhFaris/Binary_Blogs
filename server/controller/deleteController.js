import postsModel from "../models/postsModel.js";

const deleteDraftsController = async (req, res) => {
  if (!req.user) return res.sendStatus(401);
  try {
    // const postTobeDeleted
    // console.log(req.body);
    // postsModel.findOneAndDelete({ "drafts.blogId": req.body.editedBlog },)
    const blogAfterDeleting = await postsModel.findOneAndUpdate(
      { "drafts.blogId": req.body.editedBlog },
      { $pull: { drafts: { blogId: req.body.editedBlog } } },
      { new: true }
    );
    // console.log(temp);
    if (!blogAfterDeleting) return res.sendStatus(400);
    return res.status(201).send(blogAfterDeleting);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const deletePublishController = async (req, res) => {
  if (!req.user) return res.sendStatus(401);
  try {
    // const postTobeDeleted
    // console.log(req.body);
    // postsModel.findOneAndDelete({ "drafts.blogId": req.body.editedBlog },)
    const blogAfterDeleting = await postsModel.findOneAndUpdate(
      { "blogs.blogId": req.body.editedBlog },
      { $pull: { blogs: { blogId: req.body.editedBlog } } },
      { new: true }
    );
    // console.log(temp);
    if (!blogAfterDeleting) return res.sendStatus(400);
    return res.status(201).send(blogAfterDeleting);
  } catch (error) {
    return res.sendStatus(500);
  }
};

export { deleteDraftsController, deletePublishController };
