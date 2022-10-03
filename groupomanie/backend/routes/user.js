const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');

// Posts
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// User
router.get('/:id', auth, userCtrl.getUser);

// Admin
router.get('/admin/:id', auth, userCtrl.getAdmin);

module.exports = router;