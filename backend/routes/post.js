const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/post');

router.get('/', auth, sauceCtrl.getAllPosts);
router.post('/', auth, multer, sauceCtrl.createPost);
router.get('/:id', auth, sauceCtrl.getOnePost);
router.put('/:id', auth, multer, sauceCtrl.modifyPost);
router.delete('/:id', auth, sauceCtrl.deletePost);
router.post('/:id/like', auth, sauceCtrl.likeOrNot);

module.exports = router; 