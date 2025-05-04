import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ClientModel from "../db/models/client.model.js";
import DeviceModel from "../db/models/device.model.js";
import UserModel from "../db/models/user.model.js";

const adminRoute = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

adminRoute.get("/auth", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/auth/index.html"));
});

adminRoute.use("/", async (req, res, next) => {
    try {
        const { cookies } = req;

        console.log(cookies);
        if (!cookies.login && !cookies.password) return res.status(301).redirect("/admin/auth");

        const admin = await UserModel.findOne({
            where: {
                login: cookies.login
            }
        });
        if (!admin) return res.status(301).redirect("/admin/auth");

        if (admin.dataValues.password !== cookies.password) return res.status(301).redirect("/admin/auth");
        next();
    } catch (error) {
        console.log(error);
    }
});

adminRoute.use("/", express.static(path.join(__dirname, "../views/admin")));
adminRoute.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/admin/index.html"));
});

adminRoute.get("/clients", async (req, res) => {
    try {
        const clients = await ClientModel.findAll();
        res.status(200).send({ data: clients });
    } catch (error) {
        console.log(error);
    }
});

adminRoute.get("/devices", async (req, res) => {
    try {
        const devices = await DeviceModel.findAll({
            include: [
                { model: ClientModel, as: "client" },
            ]
    });
res.status(200).send({ data: devices });
    } catch (error) {
    console.log(error);
}
});

adminRoute.get("/client/:id", (req, res) => {

});

adminRoute.get("/device/:id", (req, res) => {

})

export default adminRoute;