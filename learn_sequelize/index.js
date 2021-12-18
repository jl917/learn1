const Sequelize = require('sequelize');

// Option 1: Passing parameters separately

// Option 2: Passing a connection URI
const sequelize = new Sequelize('mariadb://root:rnfyd880917@j-l.win:3307/piwik');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });