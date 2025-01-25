import postsModel from "../models/postsModel.js";

const draftSubmitController = async (req, res) => {
  if (!req.user) return res.sendStatus(401);
  if (
    !req.body.title ||
    !req.body.content ||
    !req.body.tags ||
    !req.body.category
  )
    return res.status(400).json({ message: "Give all fields" });
  try {
    const userPosts = await postsModel.findOne({ email: req.user });
    if (!userPosts) {
      try {
        await postsModel.create({
          email: req.user,
          blogs: [],
          drafts: [
            {
              title: req.body.title,
              content: req.body.content,
              tags: req.body.tags,
              category: req.body.category,
            },
          ],
          author: "John Doe",
        });
        return res.sendStatus(201);
      } catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
    } else {
      try {
        await postsModel.findOneAndUpdate(
          { email: req.user },
          {
            $push: { drafts: req.body },
          }
        );
        return res.sendStatus(201);
      } catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export { draftSubmitController };
