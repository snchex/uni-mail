import {Sequelize} from "sequelize";

const db = new Sequelize('regis-controller', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db;