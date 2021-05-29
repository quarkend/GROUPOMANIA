// /*********************************** */
// const express = require('express')
// const bodyParser = require('body-parser');
// /*importer le package http de node */
// const http = require('http');
// const mysql = require('mysql');
// const path = require('path');
// const helmet = require("helmet");
// const cors = require('cors')
// // importer notre app QUI VA RECEVOIR LA REQ ET LA REPONSE
// const app = express()



// // Routes vers les éléments

// const routesPosts = require('./routes/routesPosts');
// const routesUsers = require('./routes/user.routes');
// const authRoutes = require('./routes/auth.routes')
// // PostsModels

// app.use(bodyParser.json());
// // Utilisation de la route path pour reconnaître les requêtes images
// app.use('/images', express.static(path.join(__dirname, 'images')));

// // Headers pour éviter les erreurs de CORS
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

// // Connection à la base de donnée

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'groupomania',
// });
// app.get('/Register', (req, res) => {
//     db.query(
//         "INSERT INTO`users`(`username`, `password`, `email`) VALUES('tesggggggggt', 'teggggggggst', 'test@test.com');",


//         (err, results) => {
//             console.log(err);
//             res.send(results);

//         }
//     );
// });

// db.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
// app.use(cors());

// app.get('/PostsModels', (req, res) => {
//     db.query("SELECT * FROM 'users';", (err, results) => {
//         if (err) throw err;
//         console.log(results);
//         res.send(results);
//     });
// });

// app.listen(3000, (error) => {
//     if (err) throw err;
//     console.log(`App listening on port ${port}!`)
// });


// app.use('/api/posts', routesPosts);
// app.use('/api/auth', authRoutes);
// app.user('/api/users', routesUsers)

// app.use(mysql());

// module.exports = app;