const express = require('express');
const router = express.Router();

const { usersController } = require('../controller');

// * POST /users/signin
router.post('/signin', usersController.signin.post);

// * POST /users/signout
router.post('/signout', usersController.signout.post);

// * POST /users/signup
router.post('/signup', usersController.signup.post);

// * GET /users/userinfo
router.get('/userinfo', usersController.userinfo.get);

module.exports = router;
