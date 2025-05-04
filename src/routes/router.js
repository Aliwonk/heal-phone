import express from "express";
import homeRoute from "./home.route.js";
import adminRoute from "./admin.route.js";

const router = express.Router();

router.use("/", homeRoute);
router.use("/admin", adminRoute);

export default router;