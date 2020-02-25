const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();

const Users = require('../api-users/users-model.js');

router.post('/register', (req, res) => {
  let user = req.body

  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: `${user.username} is now logged in` })
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "server error" });
    });
})

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.json({ error: "cannot log out at this time" })
      } else {
        res.status(200).json({ message: "log out successful" })
      }
    })
  } else {
    res.status(200).json({ message: "you were never logged in" })
  }
})

module.exports = router