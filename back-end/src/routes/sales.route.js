const express = require('express');
const rescue = require('express-rescue');
const salesController = require('../controllers/sales.controller');

const salesRoute = express.Router();

salesRoute.post('/sales/orders',
  rescue((req, res, _next) => salesController.getSellerSales(req, res)));

module.exports = salesRoute;
