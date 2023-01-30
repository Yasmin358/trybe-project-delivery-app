const models = require('../database/models');
const { validate } = require('../auth/jwt');

const { Sale, SalesProduct } = models;

const getSellerSales = async (token) => {
  const { id } = validate(token);

  const sales = await Sale.findAll({
    where: { sellerId: id },
  });
  
  return sales;
};

const createSale = async ({ address, number, seller, cart, token }) => {
  const productCartSum = cart.reduce(
    (acc, curr) => Number((acc + curr.value).toFixed(2)),
    0,
  );

  const { id } = validate(token);

  const { dataValues } = await Sale.create({
    userId: id,
    sellerId: seller,
    totalPrice: productCartSum,
    deliveryAddress: address,
    deliveryNumber: number,
    status: 'Pendente',
  });

  const saleProduct = cart.map( async ({ id, qty }) => {
    return await SalesProduct.create({
      saleId: dataValues.id,
      productId: id,
      quantity: qty,
    });
  })
  Promise.all(saleProduct);
  
  return dataValues;
};

module.exports = {
  getSellerSales,
  createSale,
};
