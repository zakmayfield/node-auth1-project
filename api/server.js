const express = require('express');
const cors = require('cors');

const server = express();

// configMiddleware(server);
server.use(express.json());
server.use(cors());

const apiRouter = require('./api-router.js');

server.use('/api', apiRouter)

module.exports = server