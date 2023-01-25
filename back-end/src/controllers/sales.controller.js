const salesService = require('../services/sales.service');

const getSellerSales = async (req, res) => {
  const { token } = req.body;
  const sales = await salesService.getSellerSales(token);
  return res.status(200).json(sales);
};

module.exports = {
  getSellerSales,
};
