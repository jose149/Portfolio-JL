const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Team = sequelize.define('worker', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    secondSurname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    birthdayDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quote: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Team;