'use strict'

let express = require('express');
let UserController = require('../controllers/UserController');
let md_auth = require('../middlewares/authentication');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/users' })

let api = express.Router();
api.post('/register', UserController.createUser );
api.post('/login', UserController.login);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-avatar/:id', [ md_auth.ensureAuth, md_upload ], UserController.uploadAvatar );
api.get('/getAvatar/:imageFile', UserController.getImageFile )

module.exports = api;