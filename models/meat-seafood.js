const db = require('../config/db');
const logger = require("../logger.js").logger;

class MeatSeafood {
  static async getAll(callback) {
    return await db.query('SELECT * FROM meat_seafoods', callback);
  }

  static async getById(id, callback) {
    logger.info('MeatSeafood:getById id:'+id);
    return await db.query('SELECT * FROM meat_seafoods WHERE id = ?', [id], callback);
  }

  static async create(meatseafood, callback) {
    logger.info("MeatSeafood:create meat_seafood:"+ meatseafood.meat_seafood);
    logger.info("MeatSeafood:create price:"+ meatseafood.price);
    logger.info("MeatSeafood:create currency:"+ meatseafood.currency);
    return await db.query('INSERT INTO meat_seafoods (meat_seafood, price, currency) VALUES (?, ?, ?)', [meatseafood.meat_seafood, meatseafood.price, meatseafood.currency], callback);
  }

  static async update(id, meatseafood, callback) {
    logger.info("MeatSeafood:update id:"+ id);
    return await db.query('UPDATE meat_seafoods SET meat_seafood=?, price=?, currency=? WHERE id = ?', [meatseafood.meat_seafood, meatseafood.price, meatseafood.currency, id], callback);
  }

  static async delete(id, callback) {
    logger.info("MeatSeafood:delete id:"+ id);
    return await db.query('DELETE FROM meat_seafoods WHERE id = ?', [id], callback);
  }
}

module.exports = MeatSeafood;
