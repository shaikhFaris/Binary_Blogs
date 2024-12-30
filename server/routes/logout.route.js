import express from "express";
import logoutController from "../controller/logoutController.js";
const router = express.Router();

router.get("/", logoutController);

export default router;
