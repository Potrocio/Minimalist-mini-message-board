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
console.log('Simple console log running')
  pool.query('SELECT NOW()', (err, res) => {
      console.log('pool query ran')
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Connected to database. Current time:', res.rows[0]);
    }
  });

  module.exports = messages;
