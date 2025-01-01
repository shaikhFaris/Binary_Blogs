import express from "express";
import cors from "cors";
import { reqLogger_middleware } from "./middleware/eventLogger.js";
import registerRoute from "./routes/register.route.js";
import refreshRoute from "./routes/refresh.route.js";
import logoutRoute from "./routes/logout.route.js";
import loginRoute from "./routes/auth.route.js";
import userPostsRoute from "./routes/usersPosts.route.js";
import mongoose from "mongoose";
import authJWT from "./middleware/authJWT.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 3000;

try {
  mongoose.connect("mongodb://localhost:27017/Binary-Blogs");
  console.log("connected to DB");
} catch (error) {
  console.log(error);
}

// logger
app.use(reqLogger_middleware);

// cors: timestamp: 2:47:00
const whiteList = ["https://www.mydomain.com", "https://www.google.co.in"]; // for prod modify this
const corsOptions = {
  origin: (origin, callback) => {
    //for prod remove this !origin from if statement
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
app.use("/posts", userPostsRoute);
// app.post("/posts", (req, res) => {
//   if (req.body != null) {
//     data.push(req.body.data);
//     res.status(201).json();
//   }
// });
// app.delete("/posts:id", (req, res) => {
//   data.splice(
//     data.findIndex((blog) => blog.id.toString() == req.params.id),
//     1
//   );
//   res.status(201).json(data);
// });

app.all("*", (req, res) => {
  res.sendStatus(404);
});
app.listen(3000);
