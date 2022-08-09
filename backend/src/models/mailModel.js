import db from "../../database/db.js";

import { DataTypes } from "sequelize";

const mailModel = db.define('mail', {
    idmail: { type: DataTypes.INTEGER, primaryKey: true },
    user: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},

});

export default mailModel;