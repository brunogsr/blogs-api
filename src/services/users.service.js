const { User } = require('../models');

const createUser = async (email, password) => {
  const user = await User.create({ email, password });
  return user;
};

const getUserByEmailAndPassword = async (email, password) => {
  const verifyUser = await User.findOne({ where: { email, password } });
  return verifyUser;
};

module.exports = {
  getUserByEmailAndPassword,
  createUser,
};