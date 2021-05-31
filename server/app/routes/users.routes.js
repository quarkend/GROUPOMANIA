// //Base projet 6
const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user');

router.post('/Register', userCtrl.Register);
router.post('/login', userCtrl.login);

module.exports = router;