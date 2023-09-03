const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  try {
      return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
      return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};