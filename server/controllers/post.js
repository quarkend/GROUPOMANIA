// API fs permet les opérations traditionnelles sue les fichiers
const fs = require('fs');
const db = require('../models');
const { Op } = require("sequelize");
exports.getAllPosts = (req, res, next) => {
	const { QueryTypes } = require('sequelize');
	db.sequelize.query(`SELECT posts.id AS postId, content, 
	posts.isdeleted AS postIsDeleted, 
	posts.created_at AS createdAt, posts.updated_at AS updatedAt, 
	user_id AS userId, users.lastname, 
	FROM posts
	left join users on users.id = posts.user_id 
	`, { type: QueryTypes.SELECT })
		.then(posts => {
			res.status(200).json(posts)
		})
		.catch(error => res.status(500).json({ error: "Erreur de la base de données" }));
};
exports.getPostsByUserId = (req, res, next) => {
	const { QueryTypes } = require('sequelize');
	db.sequelize.query(`SELECT posts.id AS postId, content, 
	posts.isdeleted AS postIsDeleted, 
	posts.created_at AS createdAt, posts.updated_at AS updatedAt, 
	user_id AS userId, users.lastname, 
	users.firstname,
	FROM posts
	left join users on users.id = posts.user_id 
	where posts.user_id = ${req.params.id}`, { type: QueryTypes.SELECT })
		.then(posts => {
			res.status(200).json(posts)
		})
		.catch(error => res.status(500).json({ error: "Erreur de la base de données" }));
};
exports.getOnePost = (req, res, next) => {
	const { QueryTypes } = require('sequelize');
	db.sequelize.query(`SELECT posts.id AS postId, content, 
	posts.isdeleted AS postIsDeleted, 
	posts.created_at AS createdAt, posts.updated_at AS updatedAt, 
	user_id AS userId, users.lastname, 
	users.firstname,
	FROM posts
	left join users on users.id = posts.user_id 
	where posts.id = ${req.params.id}`, { type: QueryTypes.SELECT })
		.then(posts => {
			res.status(200).json(posts)
		})
		.catch(error => res.status(500).json({ error: "Erreur de la base de données" }));
};
exports.createPost = (req, res, next) => {
	const id = req.body.userId;
	db.User.findOne({ where: { id: id } })
		.then(user => {
			db.Post.create({
				UserId: user.id,
				content: req.body.content,
			})
				.then(post => {
					if (1) {	//(req.file)
						const filename = 'filename';
						db.create({
							PostId: post.id,
						})
							.then(post => {
								console.log(post.content);
								res.status(201).json({
									postId: post.id,
									content: post.content,
									createdAt: post.createdAt,
									updatedAt: post.updatedAt,
									userId: post.UserId,
								})
							})
							.catch(error => res.status(500).json({ error: "Erreur de la base de données !" }));
					} else {
						res.status(201).json({
							postId: post.id,
							content: post.content,
							postIsDeleted: post.isdeleted,
							createdAt: post.createdAt,
							updatedAt: post.updatedAt,
							userId: post.UserId,
						})
					}
				})
				.catch(error => res.status(400).json({ message: "Erreur lors de l'enregistrement !" }))
		})
		.catch(error => res.status(500).json({ error: "Erreur de la base de données !" }));
};
exports.modifyPost = (req, res, next) => {
};
exports.deletePost = (req, res, next) => {
	db.Post.findByPk(req.params.id)
		.then(post => {
			if (!post) {
				res.status(400).json({ error: "Post n'existe pas !" })
			} else {
				db.Post.findOne({ where: { post_id: req.params.id } })
					.then(post => {
						post.destroy({ where: { id: req.params.id } })
							.then(() => res.status(200).json({ message: "Post supprimé !" }))
							.catch(error => res.status(400).json({ error: "Une erreur est survenu lors de suppression de post !" }));
					})
					.catch(error => res.status(400).json({ error: "L'erreur de la base de données !" }));
			}
		})
		.catch(error => res.status(400).json({ error: "L'erreur de la base de données !" }));
};
