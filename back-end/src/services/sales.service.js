const models = require('../database/models');
const { validate } = require('../auth/jwt');

const { Sale } = models;

const getSellerSales = async (token) => {
  const { id } = validate(token);

  const sales = await Sale.findAll({
    where: { sellerId: id },
  });
  
  return sales;
};

const getCustomerOrders = async (id) => {
  const orders = await Sale.findAll({
    where: { userId: id },
  });
  
  return orders;
};

module.exports = {
  getSellerSales,
  getCustomerOrders,
};
