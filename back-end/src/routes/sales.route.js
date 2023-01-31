const express = require('express');
const rescue = require('express-rescue');
const salesController = require('../controllers/sales.controller');

const salesRoute = express.Router();

salesRoute.post('/sales/seller',
  rescue((req, res, _next) => salesController.getSellerSales(req, res)));

salesRoute.post('/sales/customer',
  rescue((req, res, _next) => salesController.getCustomerOrders(req, res)));

salesRoute.post('/sales',
  rescue((req, res, _next) => salesController.createSale(req, res)));

module.exports = salesRoute;
