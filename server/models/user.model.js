// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//             models.User.hasMany(models.Message)
//         }
//     };
//     User.init({
//         phone: DataTypes.STRING,
//         username: DataTypes.STRING,
//         password: DataTypes.STRING,
//         isAdmin: DataTypes.BOOLEAN
//     }, {
//         sequelize,
//         modelName: 'User',
//     });
//     return User;
// };


// // // module.exports = (sequelize, Sequelize) => {
// // //     const User = sequelize.define("users", {
// // //         username: {
// // //             type: Sequelize.STRING
// // //         },
// // //         email: {
// // //             type: Sequelize.STRING
// // //         },
// // //         password: {
// // //             type: Sequelize.STRING
// // //         }
// // //     });

// // //     return User;
// // // };
// // // 'use strict';
// // const {
// //     Model
// // } = require('sequelize');
// // module.exports = (sequelize, DataTypes) => {
// //     class User extends Model {
// //         /**
// //          * Helper method for defining associations.
// //          * This method is not a part of Sequelize lifecycle.
// //          * The `models/index` file will call this method automatically.
// //          */
// //         static associate(models) {
// //             // define association here
// //             models.User.hasMany(models.Post);
// //         }
// //     };
// //     User.init({
// //         email: DataTypes.STRING,
// //         password: DataTypes.STRING,
// //         username: DataTypes.STRING,
// //         role: DataTypes.STRING,
// //         isAdmin: DataTypes.BOOLEAN
// //     }, {
// //         sequelize,
// //         modelName: 'User',
// //     });
// //     return User;
// // };