const mysql = require('mysql');
const logger = require("../logger.js").logger;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "onlinegrocerystore"
});

db.connect(err => {
  if (err) {
    logger.error('Error connecting to MySQL database:', err);
    return;
  }
  logger.info('Connected to MySQL database');
});

module.exports = db;
