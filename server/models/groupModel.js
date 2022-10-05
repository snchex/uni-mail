import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Groups = db.define('Groups', {
    
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    dateInicial:{
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            notEmpty: true,
        },
    },
    dateFinal:{
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },

}, {
    freezeTableName: true,
});
export default Groups;
