import express from "express";
import router from "./src/routes/router.js";
import sequelizePSQL from "./src/db/database.js";
import UserModel from "./src/db/models/user.model.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(router);

// ПОРТ ПРИЛОЖЕНИЯ


sequelizePSQL.sync({ alter: true }).then(() => {
    app.listen(3000, async () => {
        const admin = await UserModel.findOne({
            where: {
                login: "admin",
                password: "admin"
            }
        });

        if (!admin) {
            UserModel.create({
                login: "admin",
                password: "admin"
            });
        }

        console.log("СЕРВЕР РАБОТАЕТ НА ПОРТУ 3000");
        console.log("http://localhost:3000");
    });
})
.catch((err) => {
    console.log(err);
})