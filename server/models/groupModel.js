import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Groups = db.define('groups', {
    
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    dateInicialG:{
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            notEmpty: true,
        },
    },
    dateFinalG:{
        type: DataTypes.DATE,
        allowNull: true,
        validate:{
            notEmpty: true,
        }
    },

}, {
    freezeTableName: true,
});
export default Groups;
