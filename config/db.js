const mysql = require('mysql');
const logger = require("../logger.js").logger;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    logger.error('Error connecting to MySQL database:', err);
    return;
  }
  logger.info('Connected to MySQL database');
});

module.exports = db;
