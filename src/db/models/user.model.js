import { DataTypes, Model } from "sequelize";
import sequelizePSQL from "../database.js";


class UserModel extends Model {};

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    login: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize: sequelizePSQL,
    modelName: "users"
});


export default UserModel;