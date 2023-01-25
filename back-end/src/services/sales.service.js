const models = require('../database/models');
const { validate } = require('../auth/jwt')

const { Sale } = models;

const getSellerSales = async (token) => {
  const { id } = validate(token);
  console.log(id, "teste");

  const sales = await Sale.findAll({
    where: { sellerId: id },
  });

  return sales || [3, 4, 5];
};

module.exports = {
  getSellerSales,
};
