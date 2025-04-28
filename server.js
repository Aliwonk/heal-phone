import express from "express";
import router from "./src/routes/router.js";

const app = express();

app.use(router);

// ПОРТ ПРИЛОЖЕНИЯ

app.listen(3000, () => {
    console.log("СЕРВЕР РАБОТАЕТ НА ПОРТУ 3000");
    console.log("http://localhost:3000");
});