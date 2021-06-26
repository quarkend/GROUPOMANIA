// API fs permet les opérations traditionnelles sue les fichiers
const fs = require('fs');
const db = require('../models');
exports.getCommentsByPostId = (req, res, next) => {
	// req.params.id
	const { QueryTypes } = require('sequelize');
	db.sequelize.query(`SELECT comments.id AS commentId, content, 
 comments.isdeleted AS commentIsDeleted, 
 comments.created_at AS createdAt, comments.updated_at AS updatedAt, 
 user_id AS userId, users.lastname, 
 users.firstname, users.email, 
 users.isdeleted AS userIsDeleted, 
 FROM comments
 left join users on users.id = comments.user_id 
 where comments.post_id = ${req.params.id}`, { type: QueryTypes.SELECT })
		.then(comments => {
			res.status(200).json(comments)
		})
		.catch(error => res.status(500).json({ error: "Erreur de la base de données" }));
};
exports.createComment = (req, res, next) => {
	db.User.findOne({ where: { id: req.body.userId } })
		.then(user => {
			db.Post.findOne({ where: { id: req.body.postId } })
				.then(post => {
					db.Comment.create({
						UserId: user.id,
						content: req.body.content,
						PostId: post.id
					})
						.then(comment => {
							if (1) {	//(req.file)
								const filename = 'filename';
								//`${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
								db.Comment.create({
									CommentId: comment.id,
								})
									.then(comment => {
										res.status(201).json({
											commentId: comment.id,
											content: comment.content,
											commentIsDeleted: comment.isdeleted,
											createdAt: comment.createdAt,
											updatedAt: comment.updatedAt,
											userId: comment.UserId,
											postId: comment.PostId,
										})
									})
									.catch(error => res.status(500).json({ error: "Erreur de la base de données ! " + error }));
							} else {
								res.status(201).json({
									commentId: comment.id,
									content: comment.content,
									commentIsDeleted: comment.isdeleted,
									createdAt: comment.createdAt,
									updatedAt: comment.updatedAt,
									userId: comment.UserId,
									postId: comment.PostId,
								})
							}
						})
						.catch(error => res.status(500).json({ error: "Erreur de la ctéation de commentaire !" }));
				})
				.catch(error => res.status(500).json({ error: "Erreur de la base de données !" }));
		})
		.catch(error => res.status(500).json({ error: "Erreur de la base de données !" }));
};
exports.deleteComment = (req, res, next) => {
	db.Comment.findByPk(req.params.id)
		.then(comment => {
			if (!comment) {
				res.status(400).json({ error: "Comment n'existe pas !" })
			} else {
				db.Comment.findOne({ where: { comment_id: req.params.id } })
					.then(comment => {
						comment.destroy({ where: { id: req.params.id } })
							.then(() => res.status(200).json({ message: "Comment supprimé !" }))
							.catch(error => res.status(400).json({ error: "Une erreur est survenu lors de suppression de comment !" }));
					})
					.catch(error => res.status(400).json({ error: "L'erreur de la base de données !" }));
			}
		})
		.catch(error => res.status(400).json({ error: "L'erreur de la base de données !" }));
};
