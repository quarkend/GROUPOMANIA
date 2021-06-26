/* Les routes pour les requêtes generales sur users */
const express = require('express');
// utilisation de la classe express.Router pour créer des gestionnaires de route pour les users
const router = express.Router();
// la logique métier décrite dans controllers/user.js
const profilCtrl = require('../controllers/profil');
// renvoie l'user correspondant à un id
router.get('/:id', profilCtrl.getOneUser);
// renvoie touts les users
router.get('/', profilCtrl.getAllUsers);
// modification de l'utilisateur 
router.put('/:id', profilCtrl.modifyUser);
//suppression d'un utilisateur
router.delete('/:id', profilCtrl.deleteUser);
//suppression d'un utilisateur par admin
router.delete('/:id/admin', profilCtrl.deleteUserByAdmin);
module.exports = router;