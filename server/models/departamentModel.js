import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Departaments = db.define('departaments', {
    
    departamento:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },


}, {
    freezeTableName: true,
});
export default Departaments;