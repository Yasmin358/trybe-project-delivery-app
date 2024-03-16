const userService = require('../services/user.service');
const jwt = require('../auth/jwt');

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  const user = await userService.login({ email, password });
  return res.status(200).json(user);
};

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = await userService.register({ name, email, password, role });
  return res.status(201).json(newUser);
};

const admin = async (req, res) => {
  const token = req.headers.authorization;
  const validation = jwt.validate(token);

  if (validation.role === 'administrator') {
    const { name, email, password, role } = req.body;
    const newUser = await userService.register({ name, email, password, role });
    
    return res.status(201).json(newUser);
  }

  return res.status(401).json({ message: 'Unauthorized' });
};

const getSellers = async (_req, res) => {
  const sellers = await userService.getSellers();
  return res.status(200).json(sellers);
};

module.exports = {
  login,
  register,
  admin,
  getSellers,
};
