const db = require('../config/db');
const logger = require("../logger.js").logger;

class PantryStaples {
  static async getAll(callback) {
    return await db.query('SELECT * FROM pantry_staples', callback);
  }

  static async getById(id, callback) {
    logger.info('PantryStaples:getById id:'+id);
    return await db.query('SELECT * FROM pantry_staples WHERE id = ?', [id], callback);
  }

  static async create(pantrystaples, callback) {
    logger.info("PantryStaples:create pantry_staples:"+ pantrystaples.pantry_staples);
    logger.info("PantryStaples:create price:"+ pantrystaples.price);
    logger.info("PantryStaples:create currency:"+ pantrystaples.currency);
    return await db.query('INSERT INTO pantry_staples (pantry_staples, price, currency) VALUES (?, ?, ?)', [pantrystaples.pantry_staples, pantrystaples.price, pantrystaples.currency], callback);
  }

  static async update(id, pantrystaples, callback) {
    logger.info("PantryStaples:update id:"+ id);
    return await db.query('UPDATE pantry_staples SET pantry_staples=?, price=?, currency=? WHERE id = ?', [pantrystaples.pantry_staples, pantrystaples.price, pantrystaples.currency, id], callback);
  }

  static async delete(id, callback) {
    logger.info("PantryStaples:delete id:"+ id);
    return await db.query('DELETE FROM pantry_staples WHERE id = ?', [id], callback);
  }
}

module.exports = PantryStaples;
