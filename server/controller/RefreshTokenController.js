import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const refreshTokenController = async (req, res) => {
  let alreadyUser = null;
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401); // unauthorised
  const refreshToken = cookies.jwt;

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
    // dont remove await from here
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
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
        return;
      }

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true, // Ensures cookie is sent only over HTTPS
        sameSite: "strict", // Prevents CSRF by restricting cross-origin requests
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json(accessToken);

      // if password is wrong
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
export default refreshTokenController;
