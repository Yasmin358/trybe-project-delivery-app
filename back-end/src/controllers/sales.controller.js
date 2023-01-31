const salesService = require('../services/sales.service');

const getSellerSales = async (req, res) => {
  const { token } = req.body;
  const sales = await salesService.getSellerSales(token);
  return res.status(200).json(sales);
};

const getCustomerOrders = async (req, res) => {
  const { id } = req.body;
  const orders = await salesService.getCustomerOrders(id);
  return res.status(200).json(orders);
};

module.exports = {
  getSellerSales,
  getCustomerOrders,
};
