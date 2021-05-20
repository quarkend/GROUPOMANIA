
const sequelize = require('sequelize')

const UserModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, FLOAT, BOOLEAN, DATE } = Sequelize
    const User = sequelize.define('User', {
        UserId: { type: INTEGER, primaryKey: true, autoIncrement: true },
        Username: { type: STRING, primaryKey: true, allowNull: false },
        Password: STRING
    })
    return User
}

module.exports = UserModel
Permissions.js

const PermissionsModel = (sequelize, Sequelize) => {
    const { INTEGER, STRING, FLOAT, BOOLEAN, DATE } = Sequelize
    const Permissions = sequelize.define('Permissions', {
        Role: { type: STRING, allowNull: false },
        ControllerAddress: { type: STRING, allowNull: false }
    })
    return Permissions
}

let normalizedPath = require('path').join(__dirname, "models")
require('fs').readdirSync(normalizedPath).forEach((file) => {
    sequelize.import('./models/' + file)
})
let { User, Permissions } = sequelize.models
// Now you can use the User and Permissions instances to control them and call functions like

// User.create({ Username, Password })
module.exports = PermissionsModel
/******************************************test2******************************************* */
'use strict'
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            required: true
        },
        role: {
            type: DataTypes.ENUM,
            values: ['user', 'admin', 'disabled']

        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        underscored: true
    });
    return Users;
};