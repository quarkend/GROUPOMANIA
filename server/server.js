// Imports
// require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors")
const apiRouter = require('./apiRouter').router;


// Instantiate server
const server = express()

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Hello World</h1>');
});

server.use(cors())



server.use('/api/', apiRouter);

// Lauch server
server.listen(8080, function () {
    console.log('Serveur en écoute (8080) !')
})
