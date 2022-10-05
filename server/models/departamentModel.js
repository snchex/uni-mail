import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Departaments = db.define('Departaments', {
    
    departamento:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },


}, {
    freezeTableName: true,
});
export default Departaments;