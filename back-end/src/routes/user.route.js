const express = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/user.controller');

const userRoute = express.Router();

userRoute.post('/login',
  rescue((req, res, _next) => userController.login(req, res)));

module.exports = userRoute;
