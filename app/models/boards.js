const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Boards = sequelize.define("repo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    stage: {
        type: DataTypes.INTEGER,
    },
}, {timestamps: false});

// Warning: use only for testing
Boards.sync();

module.exports = Boards;
