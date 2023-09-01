const userService = require('../services/users.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getUserByEmailAndPassword(email, password);
  // console.log(user);
  return res.status(user.status).json(user.data);
};

// const user = async (req, res) => {
//   const { displayName, email, password, image } = req.body;
// };
module.exports = {
  login,
};
