import userModel from "../models/userModel.js";
import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// after jwt auth by middleware this req will come here
// delete the accessToken on client
const logoutController = async (req, res) => {
  let alreadyUser = null;
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;

  // Is refreshToken in DB?
  try {
    alreadyUser = await userModel.findOne({ refreshToken: refreshToken });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
  if (!alreadyUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true, // Ensures cookie is sent only over HTTPS
      sameSite: "strict", // Prevents CSRF by restricting cross-origin requests
      maxAge: 24 * 60 * 60 * 1000,
      //   secure:true // for production
    });
    return res.sendStatus(204);
  }
  await userModel.updateOne(
    { email: alreadyUser.email },
    { refreshToken: null }
  );
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: true, // Ensures cookie is sent only over HTTPS
    sameSite: "strict", // Prevents CSRF by restricting cross-origin requests
    maxAge: 24 * 60 * 60 * 1000,
    //   secure:true // for production
  });
  return res.sendStatus(204);
};

export default logoutController;
