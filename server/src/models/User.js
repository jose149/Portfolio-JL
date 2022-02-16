const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('User', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;