const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/dwh';
const sequelize = new Sequelize(path, {operatorsAliases:0});

sequelize.authenticate().then(() => {
    console.log('Connection established successfully..');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;