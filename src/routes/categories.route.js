const categoriesRouter = require('express').Router();
const categoriesController = require('../controllers/categories.controller');
// const { validateCategories } = require('../middlewares/categories.middleware');
const { validateToken } = require('../middlewares/user.middleware');

categoriesRouter.post('/', validateToken, categoriesController.createCategory);
// categoriesRouter.get('/:id', validateToken, categoriesController.getById);

module.exports = categoriesRouter;
