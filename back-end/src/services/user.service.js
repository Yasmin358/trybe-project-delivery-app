const md5 = require('md5');
const models = require('../database/models');
const jwt = require('../auth/jwt');
const CustomError = require('../helpers/CustomError');

const { User } = models;

const login = async ({ email, password }) => {
  const result = await User.findOne({
    where: { email },
  });

  if (!result) throw new CustomError(404, 'User not found');

  const hashPassword = md5(password);

  if (result.password !== hashPassword) throw new CustomError(400, 'Invalid password');

  const token = jwt.create({
    id: result.id,
    email,
    password: hashPassword,
    role: result.role,
  });
  const { name, role, id } = result;

  return { id, name, email, role, token };
};

module.exports = {
  login,
};
