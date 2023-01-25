const md5 = require('md5');
const { Op } = require('sequelize');
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
  // const { name, role, id } = result;

  // return { id, name, email, role, token };
  const { name, role } = result;

  return { name, email, role, token };
};

const register = async ({ email, password, name }) => {
  const user = await User.findOne({
    where: {
      [Op.or]: [
        { email },
        { name },
      ],
    },
  });

  if (user) throw new CustomError(409, 'User already exists');

  const hashPassword = md5(password);

  const newUser = await User.create({ name, email, password: hashPassword, role: 'customer' });

  const token = jwt.create(newUser);
  const { role, id } = newUser;

  return { id, name, email, role, token };
};

module.exports = {
  login,
  register,
};
