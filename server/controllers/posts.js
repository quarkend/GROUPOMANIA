// Base de travail projet 6
// Nous devons créer des modèles export pour les posts et les commentaires

const jwt = require('jsonwebtoken');
const fs = require('fs'); // package node pour supprimer la photo d'un objet

// Posts
// Créer un post
exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // Caractéristiques de l'Url d'images
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Post enregistré !' }))
        .catch(error => res.status(400).json({ error }));

};
//Obtenir un post spécifique
exports.getOnePost = (req, res, next) => {
    Post.findOne({
        _id: req.params.id
    }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

//Modifier un post
exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? // Crée un objet postObjet pour mettre à jour l'URI de l'image
        {
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

//Supprimer un post
exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Post.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Post supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};
// Récupérer tous les Posts
exports.getAllPosts = (req, res, next) => {
    Post.find().then(
        (posts) => {
            res.status(200).json(posts);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};




// /***commentaires2***/
// 'use strict'

// module.exports = (sequelize, DataTypes) => {
//     const Comments = sequelize.define('comments', {
//         id: {
//             type: DataTypes.UUID,
//             primaryKey: true,
//             defaultValue: DataTypes.UUIDV4,
//             allowNull: false
//         },
//         post_id: {
//             type: DataTypes.UUID,
//             allowNull: false
//         },
//         content: {
//             type: DataTypes.TEXT,
//             required: true
//         },
//         commenter_username: {
//             type: DataTypes.STRING,
//             required: true
//         },
//         commenter_email: {
//             type: DataTypes.STRING,
//             required: true
//         },
//         status: {
//             type: DataTypes.ENUM,
//             values: ['approved', 'rejected', 'in review']

//         },
//         created_at: {
//             type: DataTypes.DATE,
//             allowNull: false
//         },
//         updated_at: DataTypes.DATE,
//         deleted_at: DataTypes.DATE
//     }, {
//         underscored: true
//     });

//     return Comments;
// };