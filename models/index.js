import Sequelize from 'sequelize';

import sequelize  from '../config/db.config.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import User from './User.js';
db.User = User(sequelize, Sequelize);

export default db;