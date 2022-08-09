import db from "../../database/db";

import { DataTypes} from "sequelize";   

const GroupModel = db.define('group', {
    idgroup: { type: DataTypes.INTEGER, primaryKey: true },
    responsible: { type: DataTypes.STRING},
    member: { type: DataTypes.STRING},
}, 
{
    freezeTableName: true
});

export default GroupModel;