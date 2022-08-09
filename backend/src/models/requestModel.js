import db from "../../database/db";

import { DataTypes } from "sequelize";
const RequestModel = db.define('request', {
    idrequest: { type: DataTypes.INTEGER, primaryKey: true},
    solicitud: { type: DataTypes.STRING }
},
{
     freezeTableName: true
}
);

export default RequestModel;
