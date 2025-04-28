import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const adminRoute = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default adminRoute;