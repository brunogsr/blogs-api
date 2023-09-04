const categoriesRouter = require('express').Router();
const categoriesController = require('../controllers/categories.controller');
// const { validateCategories } = require('../middlewares/categories.middleware');
const { validateToken } = require('../middlewares/user.middleware');

categoriesRouter.post('/', validateToken, categoriesController.createCategory);
categoriesRouter.get('/', validateToken, categoriesController.getAll);

module.exports = categoriesRouter;
