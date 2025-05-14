import { Sequelize } from "sequelize";

const sequelizePSQL = new Sequelize("default_db", "gen_user", "d6,_=%\\77v2QYQ", {
    dialect: "postgres",
    host: "192.168.0.4",
    port: 5432,
    // logging: false
});

export default sequelizePSQL;