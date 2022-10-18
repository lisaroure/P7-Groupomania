const express = require('express');
const router = express.Router();

const multer = require('multer');
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// User
router.get('/users', auth, userCtrl.getAllUsers);
router.get('/user/:id', auth, userCtrl.getUser);

router.patch('user/edit/:id', multer, auth, userCtrl.modifyUser);

// // Admin
// router.get('/admin/:id', auth, userCtrl.getAdmin);

module.exports = router;