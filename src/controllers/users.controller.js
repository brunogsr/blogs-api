const jwt = require('jsonwebtoken');
const userService = require('../services/users.service');

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });
  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getUserByEmailAndPassword(email, password);

  if (user) {
    const token = generateToken({ user });
    return res.status(200).json({ token });
  }

  return res.status(400).json({ message: 'Invalid fields' });
};

module.exports = {
  login,
};