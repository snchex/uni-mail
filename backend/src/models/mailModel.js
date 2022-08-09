import db from "../../database/db.js";


import { DataTypes } from "sequelize";
import MailTypeModel from "./mailTypeModel.js";

const MailModel = db.define('mail', {
        idmail: { type: DataTypes.INTEGER, primaryKey: true },
        user: { type: DataTypes.STRING},
        password: { type: DataTypes.STRING},
        idmailType: { type: DataTypes.INTEGER, references: 'mailType', referencesKey: 'idmailType' },
    },

    {
        freezeTableName: true
    });

//MailModel.belongsTo(MailTypeModel);
//MailModel.belongsTo(MailTypeModel, {through: Mail_MailType});
//MailModel.belongsTo(MailTypeModel, {foreignKey: 'idmailType'});

export default MailModel;