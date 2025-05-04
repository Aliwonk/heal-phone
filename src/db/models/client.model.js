import { DataTypes, Model } from "sequelize";
import sequelizePSQL from "../database.js";


class ClientModel extends Model {};


ClientModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: sequelizePSQL,
    modelName: "clients"
});

export default ClientModel;