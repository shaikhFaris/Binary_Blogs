import postsModel from "../models/postsModel.js";

const draftSubmitController = async (req, res) => {
  if (!req.user) return res.sendStatus(401);
  if (!req.body.title || !req.body.content)
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
      // editing an existing drafting
      if (req.body.editBlog) {
        // console.log(req.body.editBlog);
        try {
          const updatedBlog = await postsModel.findOneAndUpdate(
            { "drafts.blogId": req.body.editBlog }, // Find the document with matching `blogId`
            {
              $set: {
                "drafts.$.title": req.body.title,
                "drafts.$.content": req.body.content, // Content is a string
              },
            }, // Update the `content` of the matched object
            { new: true } // Return updated document
          );
          // console.log(updatedBlog);
          return res.json(updatedBlog);
        } catch (error) {
          console.log(error);
          return res.sendStatus(500);
        }
      }

      // pushing a new draft to array
      try {
        const updatedBlog = await postsModel.findOneAndUpdate(
          { email: req.user },
          {
            $push: {
              drafts: {
                title: req.body.title,
                content: req.body.content,
              },
            },
          }
        );
        return res.status(201).json(updatedBlog);
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

const blogsPublishController = async (req, res) => {
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
          blogs: [
            {
              title: req.body.title,
              content: req.body.content,
              tags: req.body.tags,
              category: req.body.category,
            },
          ],
          drafts: [],
          author: "John Doe", // change this afterwards
        });
        return res.sendStatus(201);
      } catch (error) {
        console.log(error);
        return res.sendStatus(500);
      }
    } else {
      try {
        const updatedBlog = await postsModel.findOneAndUpdate(
          { email: req.user },
          {
            $push: {
              blogs: {
                title: req.body.title,
                content: req.body.content,
                tags: req.body.tags,
                category: req.body.category,
              },
            },
            // $pop:{drafts}
          },
          { new: true }
        );
        return res.status(201).json(updatedBlog);
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
export { draftSubmitController, blogsPublishController };
