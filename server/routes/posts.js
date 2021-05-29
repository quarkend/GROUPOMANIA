// const jwt = require('jsonwebtoken');
// const fs = require('fs'); // package node pour supprimer la photo d'un objet

// // Posts
// // Créer un post
// exports.createPost = (req, res, next) => {
//     const postObject = JSON.parse(req.body.post);
//     delete postObject._id;
//     const post = new Post({
//         ...postObject,
//         imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // Caractéristiques de l'Url d'images
//     });
//     post.save()
//         .then(() => res.status(201).json({ message: 'Post enregistré !' }))
//         .catch(error => res.status(400).json({ error }));

// };