import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const registration = async (req, res) => {
  let alreadyUser = null;
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.sendStatus(400);
    return;
  }
  try {
    alreadyUser = await userModel.findOne({
      $or: [{ username: username }, { email: email }],
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
  if (alreadyUser) {
    res.sendStatus(409);
    return;
  }
  try {
    const hashpass = await bcrypt.hash(password, 10);
    await userModel.insertMany({
      username: username,
      email: email,
      hashedPassword: hashpass,
      refreshToken: null,
    });
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
  }
};
export default registration;
