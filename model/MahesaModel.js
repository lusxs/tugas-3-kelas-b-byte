import { Sequelize } from "sequelize";
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Mahesa = db.define(
    "tempat",
    {
        nama: DataTypes.STRING,
        lokasi: DataTypes.STRING,
        desk: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

export default Mahesa;

(async () => {
    await db.sync();
})();