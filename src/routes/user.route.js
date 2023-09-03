const userRouter = require('express').Router();
const userController = require('../controllers/users.controller');
const { validateCreateUser } = require('../middlewares/login.middleware');
const { validateToken } = require('../middlewares/user.middleware');

userRouter.post('/', validateCreateUser, userController.createUser);
userRouter.get('/', validateToken, userController.getAll);
userRouter.get('/:id', validateToken, userController.getById);

module.exports = userRouter;
