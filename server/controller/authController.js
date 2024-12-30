import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import path from "path";
// import * as fsPromises from "node:fs/promises";
dotenv.config();

const authController = async (req, res) => {
  let alreadyUser = null;
  const { email, password } = req.body;
  if (!email || !password) {
    res.sendStatus(400);
    return;
  }
  try {
    alreadyUser = await userModel.findOne({ email: email });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
  if (!alreadyUser) {
    res.sendStatus(404);
    return;
  }
  try {
    const ifPassCorrect = await bcrypt.compare(
      password,
      alreadyUser.hashedPassword
    );
    if (ifPassCorrect === true) {
      // JWT auth
      const accessToken = jwt.sign(
        { email: alreadyUser.email },
        process.env.ACCESS_TOKEN,
        { expiresIn: "30s" }
      );
      const refreshToken = jwt.sign(
        { email: alreadyUser.email },
        process.env.REFRESH_TOKEN,
        { expiresIn: "1d" }
      );

      // saving refresh token in db
      try {
        await userModel.updateOne(
          { _id: alreadyUser.id },
          { refreshToken: refreshToken }
        );
        res.status(200).json("user logged in");
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
export default authController;
