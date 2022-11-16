import { Sequelize } from "sequelize";

const db = new Sequelize("db_mahesa", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;