const errorMap = require('./errorMap');
const { userSchema } = require('./schemas');
const userService = require('../services/users.service');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await userService.getUserByEmailAndPassword(email, password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

const validateCreateUser = async (req, res, next) => {
  const { body } = req;
  const { error } = userSchema.validate(body);
  console.log(error);
  if (error) {
    const { details } = error;
    const message = details.map((detail) => detail.message).join(',');
    return res.status(errorMap(error.details[0].type)).json({ message });
  }
  next();
};

module.exports = {
  validateLogin,
  validateCreateUser,
};