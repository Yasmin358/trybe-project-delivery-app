const express = require('express');
const rescue = require('express-rescue');
const productsController = require('../controllers/products.controller');

const productsRoute = express.Router();

productsRoute.get('/products',
  rescue((_req, res, _next) => productsController.getAllProducts(_req, res)));

module.exports = productsRoute;
