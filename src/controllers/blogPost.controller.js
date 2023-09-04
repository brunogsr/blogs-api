const postService = require('../services/blogPost.service');

const getAll = async (_req, res) => {
  const posts = await postService.getAll();
  return res.status(posts.status).json(posts.data);
};

module.exports = {
  getAll,
};