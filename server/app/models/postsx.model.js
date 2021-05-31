/*****************************2 */
const mysql = require('mysql');

class PostsModels {
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

module.exports = posts.model;
/********* */
'use strict'

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('posts', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            required: true
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
    return Posts;
};
/*****************************3 */
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });

    return Role;
};