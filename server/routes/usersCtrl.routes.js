// Imports
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils.js');
const models = require('../models');
const asyncLib = require('async');

// Constants
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

// Routes
module.exports = {
    register: function (req, res) {
        //Params
        // const phone = req.body.phone;
        const username = req.body.username;
        const password = req.body.password;

        // if (phone == null || username == null || password == null) {
        //     return res.status(400).json({ 'error': 'missing parameters' });
        // }
        // if (phone.length != 10) {
        //     return res.status(400).json({ 'error': 'Veuillez rentrer un numéro de téléphone (ex:0612345678)' });
        // }
        if (!PASSWORD_REGEX.test(password)) {
            return res.status(400).json({ 'error': 'Mot de passe non-valide (Une taille de 4 à 8 caractèrs et doit inclure un chiffre minimum - Caractères spéciaux non-valides -' });
        }

        asyncLib.waterfall([
            function (done) {
                models.User.findOne({
                    attributes: ['username'],
                    where: { username: username }
                })
                    .then(function (userFound) {
                        done(null, userFound);
                    })
                    .catch(function (err) {
                        return res.status(500).json({ 'error': 'unable to verify user' });
                    });
            },
            function (userFound, done) {
                if (!userFound) {
                    bcrypt.hash(password, 5, function (err, bcryptedPassword) {
                        done(null, userFound, bcryptedPassword);
                    });
                } else {
                    return res.status(409).json({ 'error': 'Utilisateur déjà existant !' });
                }
            },
            function (userFound, bcryptedPassword, done) {
                const newUser = models.User.create({
                    // phone: phone,
                    username: username,
                    password: bcryptedPassword,
                    isAdmin: 0
                })
                    .then(function (newUser) {
                        done(newUser);
                    })
                    .catch(function (err) {
                        return res.status(500).json({ 'error': "Impossible d'ajouter un utilisateur" });
                    });
            }
        ], function (newUser) {
            if (newUser) {
                return res.status(201).json({
                    'userId': newUser.id
                });
            } else {
                return res.status(500).json({ 'error': "Impossible d'ajouter un utilisateur" });
            }
        });
    },
    login: function (req, res) {

        // Params
        const username = req.body.username;
        const password = req.body.password;

        if (username == null || password == null) {
            return res.status(400).json({ 'error': 'Elément(s) manquant(s)' });
        }

        asyncLib.waterfall([
            function (done) {
                models.User.findOne({
                    where: { username: username }
                })
                    .then(function (userFound) {
                        done(null, userFound);
                    })
                    .catch(function (err) {
                        return res.status(500).json({ 'error': 'unable to verify user' });
                    });
            },
            function (userFound, done) {
                if (userFound) {
                    bcrypt.compare(password, userFound.password, function (errBycrypt, resBycrypt) {
                        done(null, userFound, resBycrypt);
                    });
                } else {
                    return res.status(404).json({ 'error': "L'utilisateur n'existe pas" });
                }
            },
            function (userFound, resBycrypt, done) {
                if (resBycrypt) {
                    done(userFound);
                } else {
                    return res.status(403).json({ 'error': 'Mot de passe invalide' });
                }
            }
        ], function (userFound) {
            if (userFound) {
                return res.status(201).json({
                    'userId': userFound.id,
                    'token': jwtUtils.generateTokenForUser(userFound)
                });
            } else {
                return res.status(500).json({ 'error': "Impossible de connecter l'utilisateur" });
            }
        });
    },

    getUserProfile: function (req, res) {
        // Getting auth header
        let headerAuth = req.headers['authorization'];
        let userId = jwtUtils.getUserId(headerAuth);

        if (userId < 0)
            return res.status(400).json({ 'error': 'Mauvais token' });

        models.User.findOne({
            attributes: ['id', 'username', 'isAdmin'],
            where: { id: userId }
        }).then(function (user) {
            if (user) {
                res.status(201).json(user);
            } else {
                res.status(404).json({ 'error': 'Utilisateur non trouvé' });
            }
        }).catch(function (err) {
            res.status(500).json({ 'error': 'cannot fetch user' });
        });
    },

    deleteProfile: function (req, res) {
        let headerAuth = req.headers['authorization'];
        let userId = jwtUtils.getUserId(headerAuth);

        if (userId < 0)
            return res.status(400).json({ 'error': 'Mauvais token' });


        models.User.destroy({
            attributes: ['id', 'username'],
            where: { id: userId }
        }).then(function (user) {
            if (user) {
                res.status(201).json({ "success": "Utilisateur supprimé" });
            } else {
                res.status(404).json({ 'error': 'Utilisateur non trouvé' });
            }
        }).catch(function (err) {
            res.status(500).json({ 'error': 'cannot fetch user' });
        });
    }
}


// const { authJwt } = require("../middleware");
// const controller = require("../controllers/user.controller");
// // const controller = require("../controllers/posts.controller");

// module.exports = function (app) {
//     app.use(function (req, res, next) {
//         res.header(
//             "Access-Control-Allow-Headers",
//             "x-access-token, Origin, Content-Type, Accept"
//         );
//         next();
//     });

//     app.get("/api/all", controller.allAccess);

//     app.get(
//         "/api//user",
//         [authJwt.verifyToken],
//         controller.userBoard
//     );

//     app.get(
//         "/api/mod",
//         [authJwt.verifyToken, authJwt.isModerator],
//         controller.moderatorBoard
//     );

//     app.get(
//         "/api/admin",
//         [authJwt.verifyToken, authJwt.isAdmin],
//         controller.adminBoard
//     );
//     // app.get(
//     //     "/api/posts",
//     //     [authJwt.verifyToken, authJwt.isAdmin],
//     //     controller.postsBoard
//     // );
// };
