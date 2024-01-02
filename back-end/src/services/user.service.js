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
    role: result.role,
  });
  const { name, role } = result;

  return { name, email, role, token };
};

const register = async ({ name, email, password, role }) => {
  const userExists = await User.findOne({
    where: {
      [Op.or]: [
        { name },
        { email },
      ],
    },
  });

  if (userExists) throw new CustomError(409, 'Name or email already registered');

  const hashPassword = md5(password);

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    role,
  });

  const token = jwt.create({ id: newUser.id, email, role });

  return { name, email, role, token };
};

const getSellers = async () => {
  const result = await User.findAll({
    where: { role: 'seller' },
  });

  return result;
};

module.exports = {
  login,
  register,
  getSellers,
};
