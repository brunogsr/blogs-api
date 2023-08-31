const User = require('../models/User');

const createUser = async (email, password) => {
  const user = await User.create({ email, password });
  return user;
};

const getUserByEmail = async (email) => {
  console.log(email);
  console.log('service _________________________________');
  const verifyUser = await User.findOne({ where: { email } });
  // if (!verifyUser || user.password !== password) {
  //   return res.status(404).json({ message: 'Invalid fields' });
  // }
  return verifyUser;
};

module.exports = {
  getUserByEmail,
  createUser,
};