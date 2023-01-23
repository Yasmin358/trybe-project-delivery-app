const userService = require('../services/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.login({ email, password });
  return res.status(200).json(user);
};

const register = async (req, res) => {
  const { email, password, name } = req.body;
  const newUser = await userService.register({ email, password, name });
  return res.status(201).json(newUser);
};

module.exports = {
  login,
  register,
};
