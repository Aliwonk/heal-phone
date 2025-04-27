import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use("", express.static(__dirname + "/src/views/home"));
app.get("", (req, res) => {
    res.sendFile(__dirname + "/src/views/home/indexTest.html");
});

// ПОРТ ПРИЛОЖЕНИЯ

app.listen(3000, () => {
    console.log("СЕРВЕР РАБОТАЕТ НА ПОРТУ 3000");
    console.log("http://localhost:3000");
});