const userRouter = require('express').Router();
const userController = require('../controllers/users.controller');
const { validateCreateUser } = require('../middlewares/login.middleware');

userRouter.post('/', validateCreateUser, userController.createUser);

module.exports = userRouter;
