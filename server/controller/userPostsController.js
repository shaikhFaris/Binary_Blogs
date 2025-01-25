import postsModel from "../models/postsModel.js";

const userPostsController = async (req, res) => {
  if (!req.user) return res.sendStatus(401);
  console.log("controller: " + req.user);
  try {
    const posts = await postsModel.findOne({ email: req.user });
    // console.log(posts);
    if (!posts) return res.status(404).json("No posts by you");
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
export default userPostsController;
