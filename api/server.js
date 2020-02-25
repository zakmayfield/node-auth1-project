const express = require('express');
const cors = require('cors');
const session = require('express-session');

const server = express();

const sessionConfig = {
  name: "monkey",
  secret: "whats in the box!?",
  cookie: {
    maxAge: 1000 * 30,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
}

// configMiddleware(server);
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

const apiRouter = require('./api-router.js');

server.use('/api', apiRouter)

module.exports = server