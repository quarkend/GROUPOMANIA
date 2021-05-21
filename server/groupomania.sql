CREATE DATABASE IF NOT EXISTS `groupomania` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `groupomania`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,/* INT (nombre entier) UNSIGNED (on commence à partir de ) NOT NULL (Toujours renseigné) AUTO_INCREMENT (incrémentation automatique)*/
  `lastName` VARCHAR(255) NOT NULL,/* VARCHAR (Nombre de caractères)*/
  `firstName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `moderation` INT UNSIGNED DEFAULT NULL,/* NOUS METTONS EN PLACE UNE COLONNE POUR LA VALIDATION PAR LE MODERATEUR*/
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`) /*La contrainte UNIQUE garantit que toutes les valeurs d'une colonne sont différentes pour éviter l'incription de 2 utilisateurs*/
) 
ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8; 

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

ALTER TABLE `users` ADD PRIMARY KEY (`id`);
ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;


/***********************2*************************/
-- 'use strict'

-- const Sequelize = require('sequelize'); 
-- const env = require('./env');
-- const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
--   host: env.DATABASE_HOST,
--   port: env.DATABASE_PORT,
--   dialect: env.DATABASE_DIALECT,
--   define: {
--     underscored: true
--   }
-- });

-- // Connect all the models/tables in the database to a db object, 
-- //so everything is accessible via one object
-- const db = {};

-- db.Sequelize = Sequelize;
-- db.sequelize = sequelize;

-- //Models/tables
-- db.users = require('../models/users.js')(sequelize, Sequelize);
-- db.comments = require('../models/comments.js')(sequelize, Sequelize);
-- db.posts = require('../models/posts.js')(sequelize, Sequelize);

-- //Relations
-- db.comments.belongsTo(db.posts);
-- db.posts.hasMany(db.comments);
-- db.posts.belongsTo(db.users);
-- db.users.hasMany(db.posts);

-- module.exports = db;