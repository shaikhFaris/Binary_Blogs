// let data = [
//   {
//     id: 1,
//     title: "My First Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur, asperiores incidunt quas iste ex consequatur modi adipisci temporibus hic doloribus enim non natus accusantium dolore magnam recusandae tempora aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur, asperiores incidunt quas iste ex consequatur modi adipisci temporibus hic doloribus enim non natus accusantium dolore magnam recusandae tempora aperiam!",
//   },

//   {
//     id: 2,
//     title: "My 2nd Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
//   },
//   {
//     id: 3,
//     title: "My 3rd Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
//   },
//   {
//     id: 4,
//     title: "My Fourth Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
//   },
//   {
//     id: 5,
//     title: "My fifth Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
//   },
//   {
//     id: 6,
//     title: "My Fourth Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
//   },
//   {
//     id: 7,
//     title: "My Fourth Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
//   },
//   {
//     id: 8,
//     title: "My Fourth Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
//   },
//   {
//     id: 9,
//     title: "My Fourth Post",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
//   },
// ];
import postsModel from "../models/postsModel.js";

const userPostsController = async (req, res) => {
  if (!req.user) return res.sendStatus(401);
  console.log(req.user);
  try {
    const posts = await postsModel.findOne({ email: req.user });
    console.log(posts);
    if (!posts) return res.status(404).json("No posts by you");
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
export default userPostsController;
