const express = require('express');
const router = express.Router();
const users = require('../services/users');

router.post('/register', async function(req, res, next) {
    try {
      res.json(await users.register(req.body));
    } catch (err) {
      console.error(`Error while registering user`, err.message);
      next(err);
    }
});

router.post('/login', async function(req, res, next) {
  try {
    let user = await users.login(req.body);
    if (user == "Email or password incorrect") {
      res.status(400).send("Email or password incorrect");
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(`Error while login`, err.message);
    next(err);
  }
});

module.exports = router;