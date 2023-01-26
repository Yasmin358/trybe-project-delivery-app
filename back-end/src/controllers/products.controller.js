const productsService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const allProducts = await productsService.findAllProducts();
  return res.status(200).json(allProducts);
}

module.exports = {
  getAllProducts,
};
