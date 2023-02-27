import { Sequelize } from "sequelize";
import db from "../config/database.js";
//import Mails from "./mailModel.js";

const { DataTypes } = Sequelize;

const MailTypes = db.define('mailTypes', {
    
    tipo:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },


}, {
    freezeTableName: true,
});

export default MailTypes;