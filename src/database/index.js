import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import User from '../app/models/Users';
// import Address from '../app/models/Address';

const connection = new Sequelize(dbConfig);

User.init(connection);
// Address.init(connection);

export default connection;
