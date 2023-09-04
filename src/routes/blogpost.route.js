const blogPostRouter = require('express').Router();
const postController = require('../controllers/blogPost.controller');
// const { validateCategories } = require('../middlewares/categories.middleware');
const { validateToken } = require('../middlewares/user.middleware');

blogPostRouter.get('/', validateToken, postController.getAll);

module.exports = blogPostRouter;
