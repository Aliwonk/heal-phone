import { Sequelize } from "sequelize";

const sequelizePSQL = new Sequelize("doctor-mob", "postgres", "root", {
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    // logging: false
});

export default sequelizePSQL;