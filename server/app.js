/*********************************** */
const express = require('express')
const bodyParser = require('body-parser');
/*importer le package http de node */
const http = require('http');
const mysql = require('mysql');
// importer notre app QUI VA RECEVOIR LA REQ ET LA REPONSE
const app = express()

app.use(bodyParser.json());

// Headers pour éviter les erreurs de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'groupomania',
});
app.get('/register', (req, res) => {
    db.query(
        "INSERT INTO users (username, password) VALUES ('pall', 'password');",
        (err, results) => {
            console.log(err);
            res.send(results);

        }
    );
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
// app.use(mysql());

module.exports = app;