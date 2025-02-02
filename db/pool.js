require('dotenv').config();

const { Pool } = require("pg");

// All of the following properties should be read from environment variables
module.exports = new Pool({
//   host: process.env.HOST, // or wherever the db is hosted
  connectionString: process.env.DATABASE_URL,
  port: process.env.PORT // The default port
});

// module.exports = new Pool({
//     host: process.env.HOST, // or wherever the db is hosted
//     user: process.env.USER,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: process.env.PORT // The default port
//   });