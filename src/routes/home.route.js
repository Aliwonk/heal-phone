import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const homeRoute = express.Router();
const jsonParse = express.json();

homeRoute.use("/static", express.static(path.join(__dirname, "../views/home")));
homeRoute.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home/index.html"));
});

homeRoute.post("/bid", jsonParse, (req, res) => {
    try {
        const { body } = req;
        console.log(body);
    } catch (error) {
        console.log(error);
    }
});

export default homeRoute;