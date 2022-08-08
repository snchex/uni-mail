import {Sequelize} from 'sequelize';

const db = new Sequelize('dbRegistrationService', 'uni', 'Uni-admin1996', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;
