// server/routes/api.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Routes
router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.post('/posts', postController.createPost);

module.exports = router;
