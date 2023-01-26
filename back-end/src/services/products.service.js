const models = require('../database/models');
const { Product } = models;

const findAllProducts = async () => {
  const allProducts = await Product.findAll({});
  return allProducts;
}

module.exports = {
  findAllProducts,
};
