import {Sequelize} from 'sequelize';
//const defineModels = require('../db/models/index');
import { definePqr, defineLogin } from '../db/models/index.js';

export const sequelize = new Sequelize({
    host: '127.0.0.1',
    port: '5432',
    username: 'postgres',
    'password': 'admin',
    'database': 'final',
    dialect: 'postgres'
})

definePqr(sequelize)
defineLogin(sequelize)

sequelize.sync()  //OJO 

try {
    await sequelize.authenticate();
    console.log ('conection has been established succesfully')
} catch (error) {
    console.error('Unable to connect to the database:', error);
} 