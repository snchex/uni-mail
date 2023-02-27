import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Groups = db.define('groups', {
    
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'El email ya fue registrado anteriormente registre uno nuevo'
        },
        validate: {
            isEmail: {
                msg: 'Email no valido'
            },
            notEmpty: {
                msg: 'Ingrese un email'
            }
        }
    },
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
            notEmpty: false,
        }
    },

}, {
    freezeTableName: true,
});
export default Groups;
