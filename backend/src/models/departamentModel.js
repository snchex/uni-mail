import { DataTypes } from "sequelize";
import db from "../../database/db";


const DepartamentModel = db.define('departament', {
    iddepartament: { type: DataTypes.INTEGER, primaryKey: true },   
    departament: { type: DataTypes.STRING }
}, 
{
    freezeTableName: true
}

);


export default DepartamentModel;