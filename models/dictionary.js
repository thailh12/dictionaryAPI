'use strict';
module.exports = (sequelize, DataTypes) => {
    const Dictionary = sequelize.define('Dictionary', {
        idx: DataTypes.INTEGER,
        word: DataTypes.STRING,
        detail: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'en_vi'
    });
    return Dictionary;
};