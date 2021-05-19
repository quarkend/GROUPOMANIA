const express = require('express')
/*importer le package http de node */
const http = require('http');
// importer notre app QUI VA RECEVOIR LA REQ ET LA REPONSE
const app = express()
const mysql = require('mysql');
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

/*choix du port avec amelioration*/
const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
/* creation de la fonction qui sera appler a chaque requette recus par le server elle  2 arguments req et res*/
const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});
/* la il doit ecouter les requettes envoyer  */
server.listen(port);
