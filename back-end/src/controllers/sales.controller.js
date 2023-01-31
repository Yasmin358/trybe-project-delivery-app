const salesService = require('../services/sales.service');

const getSellerSales = async (req, res) => {
  const { token } = req.body;
  const sales = await salesService.getSellerSales(token);
  return res.status(200).json(sales);
};

const getCustomerOrders = async (req, res) => {
  const { token } = req.body;
  const orders = await salesService.getCustomerOrders(token);
  return res.status(200).json(orders);
};

const createSale = async (req, res) => {
  const token = req.headers.authorization;
  const { address, number, seller, cart } = req.body;

  const sale = await salesService.createSale({ address, number, seller, cart, token });
  return res.status(201).json(sale);
};

module.exports = {
  getSellerSales,
  getCustomerOrders,
  createSale,
};
