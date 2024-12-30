import express from "express";
import cors from "cors";
import { reqLogger_middleware } from "./middleware/eventLogger.js";
import registerRoute from "./routes/register.route.js";
import refreshRoute from "./routes/refresh.route.js";
import logoutRoute from "./routes/logout.route.js";
import loginRoute from "./routes/auth.route.js";
import mongoose from "mongoose";
import authJWT from "./middleware/authJWT.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 3000;

let data = [
  {
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur, asperiores incidunt quas iste ex consequatur modi adipisci temporibus hic doloribus enim non natus accusantium dolore magnam recusandae tempora aperiam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur, asperiores incidunt quas iste ex consequatur modi adipisci temporibus hic doloribus enim non natus accusantium dolore magnam recusandae tempora aperiam!",
  },

  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
  },
  {
    id: 5,
    title: "My fifth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
  },
  {
    id: 6,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
  },
  {
    id: 7,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
  },
  {
    id: 8,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
  },
  {
    id: 9,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
  },
];
try {
  mongoose.connect("mongodb://localhost:27017/Binary-Blogs");
  console.log("connected to DB");
} catch (error) {
  console.log(error);
}

// logger
app.use(reqLogger_middleware);

// cors
app.use(cors());

// to parse body
app.use(express.json());

app.use(cookieParser());

app.use("/register", registerRoute);

app.use("/login", loginRoute);

app.use("/refresh", refreshRoute);

// jwt verification middleware for below routes which are protected
app.use(authJWT);

//for logout and to delete refreshToken
app.use("/logout", logoutRoute);

// This is setting for get request
app.get("/posts", (req, res) => {
  res.json(data);
});
app.post("/posts", (req, res) => {
  if (req.body != null) {
    data.push(req.body.data);
    res.status(201).json();
  }
});
app.delete("/posts:id", (req, res) => {
  data.splice(
    data.findIndex((blog) => blog.id.toString() == req.params.id),
    1
  );
  res.status(201).json(data);
});

app.all("*", (req, res) => {
  res.sendStatus(404);
});
app.listen(3000);
