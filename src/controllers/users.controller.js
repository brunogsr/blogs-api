const userService = require('../services/users.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getUserByEmailAndPassword(email, password);
  // console.log(user);
  return res.status(user.status).json(user.data);
};

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  return res.status(user.status).json(user.data);
  // return user;
};
module.exports = {
  login,
  createUser,
};
