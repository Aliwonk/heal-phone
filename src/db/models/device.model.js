import { DataTypes, Model } from "sequelize";
import sequelizePSQL from "../database.js";
import ClientModel from "./client.model.js";

class DeviceModel extends Model {};

DeviceModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: sequelizePSQL,
    modelName: "devices"
});

DeviceModel.belongsTo(ClientModel, {
    foreignKey: "client_id",
    as: "client"
});

ClientModel.hasMany(DeviceModel, {
    foreignKey: "client_id",
    as: "devices"
});

export default DeviceModel;