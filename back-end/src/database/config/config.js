require('dotenv').config();

const environment = process.env.NODE_ENV || "test";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'localhost' || process.env.MYSQLHOST,
  port: process.env.MYSQL_PORT || '3306' || process.env.MYSQLPORT,
  database:
    `${process.env.MYSQL_DB_NAME || process.env.MYSQLDATABASE || 'delivery-app'}${suffix[environment] || suffix.test} `,
  username: process.env.MYSQL_USER || 'root' || process.env.MYSQLUSER,
  password: process.env.MYSQL_PASSWORD || 'password' || process.env.MYSQLPASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
