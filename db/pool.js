require('dotenv').config();

const { Pool } = require("pg");

// All of the following properties should be read from environment variables
module.exports = new Pool({
  //host: process.env.HOST, // or wherever the db is hosted
  connectionString: process.env.DATABASE_URL,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT // The default port
});

(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Connected to database. Current time:', result.rows[0].now);
  } catch (err) {
    console.error('Database connection error:', err);
  }
})();
