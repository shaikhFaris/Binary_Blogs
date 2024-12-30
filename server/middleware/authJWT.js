import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";

const authJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  console.log(authHeader); //format: Bearer token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    console.log(decoded);
    req.user = decoded.email;
    next();
  });
};
export default authJWT;
