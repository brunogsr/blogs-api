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

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) {
    return { status: 404, data: { message: 'User does not exist' } };
  }
  return { status: 200, data: user };
};

module.exports = {
  getUserByEmailAndPassword,
  createUser,
  getAll,
  getById,
};