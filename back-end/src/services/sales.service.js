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

module.exports = {
  getSellerSales,
};
