import express from "express";
import refreshTokenController from "../controller/RefreshTokenController.js";
const router = express.Router();

router.get("/", refreshTokenController);

export default router;
