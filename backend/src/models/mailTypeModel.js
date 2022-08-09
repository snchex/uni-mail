import db from "../../database/db.js";

import { DataTypes } from "sequelize";

const MailTypeModel = db.define('mailTypes',{
        idmailType: { type: DataTypes.INTEGER, primaryKey: true },
        tipo: { type: DataTypes.STRING }
    });



export default  MailTypeModel;  