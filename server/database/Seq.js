const { Sequelize } = require('sequelize');
const db = new Sequelize('dorakart', 'root', 'pass@123', {
    host: 'localhost',
    dialect: 'mysql'
  });


module.exports = db