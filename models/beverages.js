const db = require('../config/db');
const logger = require("../logger.js").logger;

class Bevarages {
  static async getAll(callback) {
    return await db.query('SELECT * FROM beverages', callback);
  }

  static async getById(id, callback) {
    logger.info('Bevarages:getById id:'+id);
    return await db.query('SELECT * FROM beverages WHERE id = ?', [id], callback);
  }

  static async create(bevarages, callback) {
    logger.info("Bevarages:create beverages:"+ bevarages.beverages);
    logger.info("Bevarages:create price:"+ bevarages.price);
    logger.info("Bevarages:create currency:"+ bevarages.currency);
    return await db.query('INSERT INTO beverages (beverages, price, currency) VALUES (?, ?, ?)', [bevarages.beverages, bevarages.price, bevarages.currency], callback);
  }

  static async update(id, bevarages, callback) {
    logger.info("Bevarages:update id:"+ id);
    return await db.query('UPDATE beverages SET beverages=?, price=?, currency=? WHERE id = ?', [bevarages.beverages, bevarages.price, bevarages.currency, id], callback);
  }

  static async delete(id, callback) {
    logger.info("Bevarages:delete id:"+ id);
    return await db.query('DELETE FROM beverages WHERE id = ?', [id], callback);
  }
}

module.exports = Bevarages;
