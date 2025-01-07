const pool = require("./pool");

const messages = [
    {
      text: "Hi there!",
      user: "John",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "John 2",
      added: new Date()
    }
  ];

(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Connected to database. Current time:', result.rows[0].now);
  } catch (err) {
    console.error('Database connection error:', err);
  }
})();

module.exports = messages;
