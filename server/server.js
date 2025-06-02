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
import { rateLimit } from "express-rate-limit";
const app = express();
const PORT = 3000;
import dotenv from "dotenv";
dotenv.config();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 15,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many requests. Try again later." },
});

try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("connected to DB");
} catch (error) {
  console.log(error);
}

app.set("trust proxy", true);

// logger
app.use(reqLogger_middleware);

// cors: timestamp: 2:47:00
const whiteList = ["https://binary-blogs-ten.vercel.app"]; // for prod modify this
const corsOptions = {
  origin: (origin, callback) => {
    //for prod remove this !origin from if statement
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by cors") {
    console.log("blocked by cors" + req.ip);
    res.status(403).json({ message: "CORS error: Access denied" });
  } else {
    next(err); // pass other errors
  }
});

// to parse body
app.use(express.json());

app.use(cookieParser());

app.use("/register", authLimiter, registerRoute);

app.use("/login", authLimiter, loginRoute);

app.use("/refresh", refreshRoute);

// jwt verification middleware for below routes which are protected
app.use(authJWT);

//for logout and to delete refreshToken
app.use("/logout", logoutRoute);

// This is setting for request
app.use("/posts", userPostsRoute);

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(3000);
