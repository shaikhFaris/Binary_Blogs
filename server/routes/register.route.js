import express from "express";
import registration from "../controller/registration.js";
const router = express.Router();

router.post("/", registration);

export default router;
