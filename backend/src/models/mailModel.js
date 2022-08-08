import db from "../../database/db.js";

import { DataTypes } from "sequelize";

const mailModel = db.define('email', {
    user: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},

});

export default mailModel;