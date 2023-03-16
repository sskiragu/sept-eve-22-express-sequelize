import Sequelize from 'sequelize';

import sequelize  from '../config/db.config.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import User from './User.js';
db.User = User(sequelize, Sequelize);

import Role from './Role.js';
db.Role = Role( sequelize, Sequelize );

import Student from './Student.js';
db.Student = Student(sequelize, Sequelize);

//Create the relationship - User and Role
//To create a One-To-One relationship, the hasOne and belongsTo associations are used together;
// To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
// To create a Many-To-Many relationship, two belongsToMany calls are used together.
// Note: there is also a Super Many-To-Many relationship, which uses six associations at once, and will be discussed in the Advanced Many-to-Many relationships guide.
db.Role.belongsToMany(db.User, {
    through: "user_roles",
    foreignKey: "role_id",
    otherKey: "user_id"
  });
  
  db.User.belongsToMany(db.Role, {
    through: "user_roles",
    foreignKey: "user_id",
    otherKey: "role_id"
  });

  //On-To-One Relationship
  db.User.hasOne(db.Student);

  db.Student.belongsTo(db.User, {
    foreignKey: "student_id"
  });
  
export default db;