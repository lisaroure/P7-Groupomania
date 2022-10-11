const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');

router.post('/signup', auth, userCtrl.signup);
router.post('/login', userCtrl.login);

// User
router.get('/users', auth, userCtrl.getAllUsers);
router.get('/user/:id', auth, userCtrl.getUser);

// Admin
router.get('/admin/:id', auth, userCtrl.getAdmin);

module.exports = router;