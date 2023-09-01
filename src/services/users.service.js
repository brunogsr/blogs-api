const { generateToken } = require('../utils/token');
const { User } = require('../models');

const createUser = async (email, password) => {
  const user = await User.create({ email, password });
  return user;
};

const getUserByEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }
  const { password: _, ...userWithoutPassword } = user.dataValues;
  console.log(userWithoutPassword);
  const token = generateToken(userWithoutPassword);
  console.log(typeof token);
  return { status: 200, data: { token } };
};

module.exports = {
  getUserByEmailAndPassword,
  createUser,
};