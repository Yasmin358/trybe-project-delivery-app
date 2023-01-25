const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user.controller');

const userRoute = express.Router();

userRoute.post('/login',
  rescue((req, res, _next) => userController.login(req, res)));

userRoute.post('/register',
  rescue((req, res, _next) => userController.register(req, res)));

userRoute.post('/admin/register', rescue((req, res, _next) =>
  userController.admin(req, res)));

module.exports = userRoute;
