import {Sequelize} from "sequelize";

const db = new Sequelize('emailMonitoring', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db;