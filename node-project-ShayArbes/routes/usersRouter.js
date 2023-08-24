const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/users', usersController.getUsers);
router.post('/signing_up', usersController.signingUp);
router.post('/login', usersController.login);
module.exports = router;