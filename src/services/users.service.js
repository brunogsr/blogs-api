const { generateToken } = require('../utils/token');
const { User } = require('../models');

const getUserByEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }
  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = generateToken(userWithoutPassword);
  return { status: 200, data: { token } };
};

const createUser = async (userData) => {
  const { displayName, email, password, image } = userData;
  const verifyExistedUser = await User.findOne({ where: { email } });
  if (verifyExistedUser) {
    return { status: 409, data: { message: 'User already registered' } };
  }
  const user = await User.create({ displayName, email, password, image });
  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = generateToken(userWithoutPassword);
  return { status: 201, data: { token } };
};

module.exports = {
  getUserByEmailAndPassword,
  createUser,
};