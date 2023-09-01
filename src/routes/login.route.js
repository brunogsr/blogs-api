const loginRouter = require('express').Router();
const userController = require('../controllers/users.controller');
const { validateLogin } = require('../middlewares/login.middleware');

loginRouter.post('/', validateLogin, userController.login);
// userRouter.post('/', validateUser, userController.user);

module.exports = loginRouter;
