const db = require('../config/db');
const logger = require("../logger.js").logger;

class FruitsVegetables {
  static async getAll(callback) {
    return await db.query('SELECT * FROM fruit_vegetables', callback);
  }

  static async getById(id, callback) {
    logger.info('FruitsVegetables:getById id:'+id);
    return await db.query('SELECT * FROM fruit_vegetables WHERE id = ?', [id], callback);
  }

  static async create(fruitvegetables, callback) {
    logger.info("FruitsVegetables:create fruit_vegetables:"+ fruitvegetables.fruit_vegetable);
    logger.info("FruitsVegetables:create price:"+ fruitvegetables.price);
    logger.info("FruitsVegetables:create currency:"+ fruitvegetables.currency);
    return await db.query('INSERT INTO fruit_vegetables (fruit_vegetable, price, currency) VALUES (?, ?, ?)', [fruitvegetables.fruit_vegetable, fruitvegetables.price, fruitvegetables.currency], callback);
  }

  static async update(id, fruitvegetables, callback) {
    logger.info("FruitsVegetables:update id:"+ id);
    return await db.query('UPDATE fruit_vegetables SET fruit_vegetable=?, price=?, currency=? WHERE id = ?', [fruitvegetables.fruit_vegetable, fruitvegetables.price, fruitvegetables.currency, id], callback);
  }

  static async delete(id, callback) {
    logger.info("FruitsVegetables:delete id:"+ id);
    return await db.query('DELETE FROM fruit_vegetables WHERE id = ?', [id], callback);
  }
}

module.exports = FruitsVegetables;
