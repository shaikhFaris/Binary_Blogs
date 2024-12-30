import userModel from "../models/userModel.js";
import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const refreshTokenController = async (req, res) => {
  let alreadyUser = null;
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401); // unauthorised
  const refreshToken = cookies.jwt;

  try {
    alreadyUser = await userModel.findOne({ refreshToken: refreshToken });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
  if (!alreadyUser) {
    res.sendStatus(404); // forbidden
    return;
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    if (err || alreadyUser.email !== decoded.email) return res.sendStatus(403);
    const accessToken = jwt.sign(
      { email: decoded.email },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "30s",
      }
    );
    res.json(accessToken);
  });
};
export default refreshTokenController;
