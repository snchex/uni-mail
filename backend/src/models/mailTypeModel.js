import db from "../../database/db.js";
import MailModel from "./mailModel.js";

import { DataTypes } from "sequelize";

const MailTypeModel = db.define('mailType',{
        idmailType: { type: DataTypes.INTEGER, primaryKey: true },
        tipo: { type: DataTypes.STRING }
    }, 
    {
        freezeTableName: true
    });

MailTypeModel.hasMany(MailModel)

export default  MailTypeModel;  