// const jwt = require('jsonwebtoken');
const userService = require('../services/users.service');

// const generateToken = (payload) => {
//   const token = jwt.sign(payload, process.env.JWT_SECRET, {
//     expiresIn: '15m',
//     algorithm: 'HS256',
//   });
//   return token;
// };

const login = async (req, res) => {
  console.log('controller _________________________________');
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email, password);
  // if (!user || user.password !== password) {
  //   return res.status(401).json({ message: 'Incorrect username or password' });
  // }
  res.status(200).json(user);
};

module.exports = {
  login,
};