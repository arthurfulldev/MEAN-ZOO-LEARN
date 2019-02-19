'use strict'

let express = require('express');
let UserController = require('../controllers/UserController');
let md_auth = require('../middlewares/authentication');

let api = express.Router();
api.post('/register', UserController.createUser );
api.post('/login', md_auth.ensureAuth, UserController.login);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;