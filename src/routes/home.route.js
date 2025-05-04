import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ClientModel from "../db/models/client.model.js";
import DeviceModel from "../db/models/device.model.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const homeRoute = express.Router();
const jsonParse = express.json();

homeRoute.use("/static", express.static(path.join(__dirname, "../views/home")));
homeRoute.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home/index.html"));
});

homeRoute.post("/bid", jsonParse, async (req, res) => {
    try {
        const { body } = req;
        const result = await ClientModel.create({
            name: body.name,
            phone_number: body.phone
        });

        if (result) return res.status(201).send({ message: "Заявка принята" });

    } catch (error) {
        if (error.parent && error.parent.code == 23505) return res.status(400).send({ message: "Телефон существует" });
        console.log(error.parent);
    }
});

homeRoute.post("/record", jsonParse, async (req, res) => {
    try {
        const { body } = req;
        let clientExists = await ClientModel.findOne({
            where: {
                phone_number: body.phone
            }
        });
        if (!clientExists) {
            clientExists = await ClientModel.create({
                name: body.name,
                phone_number: body.phone
            });
        }

        const device = await DeviceModel.create({
            brand: body.brand,
            reason: body.reason,
            client_id: clientExists.dataValues.id
        });

        if (device) return res.status(201).send({ message: "Заявка принята" });

    } catch (error) {
        console.log(error);
    }
});

export default homeRoute;