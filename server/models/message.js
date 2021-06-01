'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Message extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Message.belongsTo(models.User, {
                foreinKey: {
                    allowNull: false
                }
            })
        }
    };
    Message.init({
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        img: DataTypes.STRING,
        attachment: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Message',
    });
    return Message;
};