const express = require('express');
const cors = require('cors');
const userRoute = require('../routes/user.route');
const salesRoute = require('../routes/sales.route');
const productsRoute = require('../routes/products.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(userRoute);
app.use(salesRoute);
app.use(productsRoute);

module.exports = app;
