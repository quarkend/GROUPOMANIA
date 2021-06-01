/*****************************2 */
const mysql = require('mysql');

class posts {
    constructor() {
    }
    getAllPosts() {
        let sql = "SELECT posts.id, posts.userId, DATE_FORMAT(DATE(posts.date), '%d/%m/%Y') AS date, TIME(posts.date) AS time, posts.tittle, posts.content, users.lastName, users.firstName FROM posts JOIN users ON posts.userId = users.id ORDER BY posts.date DESC";
        sql = mysql.format(sql, sqlInserts);
    }
    createPost(sqlInserts) {
        let sql = 'INSERT INTO posts VALUES(NULL, ?, NOW(), ?,?)';
        sql = mysql.format(sql, sqlInserts);
    }
    updatePost(sqlInserts1, sqlInserts2) {
        let sql1 = 'SELECT * FROM posts where id = ?';
        sql1 = mysql.format(sql1, sqlInserts1);
    }
    deletePost(sqlInserts1, sqlInserts2) {
        let sql1 = 'SELECT * FROM posts where id = ?';
        sql1 = mysql.format(sql1, sqlInserts1);
    }
    getComments(sqlInserts) {
        let sql = "SELECT comments.id, comments.userId, comments.postid, DATE_FORMAT(comments.date, '%d/%m/%Y à %H:%i:%s') AS date, comments.comContent, users.firstName, users.lastName FROM comments JOIN users on comments.userId = users.id ORDER BY date";
        sql = mysql.format(sql, sqlInserts);
    }
    createComment(sqlInserts) {
        let sql = 'INSERT INTO comments VALUES(NULL, ?, ?, NOW(), ?)';
        sql = mysql.format(sql, sqlInserts);
    }
    updateComment(sqlInserts1, sqlInserts2) {
        let sql1 = 'SELECT * FROM comments where id = ?';
        sql1 = mysql.format(sql1, sqlInserts1);
    }
    deleteComment(sqlInserts1, sqlInserts2) {
        let sql1 = 'SELECT * FROM comments where id = ?';
        sql1 = mysql.format(sql1, sqlInserts1);
    }
};

module.exports = posts;
/**************** */

// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class Post extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//             models.Post.belongsTo(models.User, {
//                 foreignKey: {
//                     allowNull: false
//                 }
//             })
//         }
//     };
//     Post.init({
//         title: DataTypes.STRING,
//         content: DataTypes.STRING,
//         attachment: DataTypes.STRING
//     }, {
//         sequelize,
//         modelName: 'Post',
//     });
//     return Post;
// };