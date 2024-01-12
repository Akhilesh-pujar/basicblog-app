const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content });
  
    try {
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };