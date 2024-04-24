const db = require('../config/db');
const logger = require("../logger.js").logger;

class DairyEggs {
  static async getAll(callback) {
    return await db.query('SELECT * FROM dairy_eggs', callback);
  }

  static async getById(id, callback) {
    logger.info('DairyEggs:getById id:'+id);
    return await db.query('SELECT * FROM dairy_eggs WHERE id = ?', [id], callback);
  }

  static async create(dairyeggs, callback) {
    logger.info("DairyEggs:create dairy_eggs:"+ dairyeggs.dairy_eggs);
    logger.info("DairyEggs:create price:"+ dairyeggs.price);
    logger.info("DairyEggs:create currency:"+ dairyeggs.currency);
    return await db.query('INSERT INTO dairy_eggs (dairy_eggs, price, currency) VALUES (?, ?, ?)', [dairyeggs.dairy_eggs, dairyeggs.price, dairyeggs.currency], callback);
  }

  static async update(id, dairyeggs, callback) {
    logger.info("DairyEggs:update id:"+ id);
    return await db.query('UPDATE dairy_eggs SET dairy_eggs=?, price=?, currency=? WHERE id = ?', [dairyeggs.dairy_eggs, dairyeggs.price, dairyeggs.currency, id], callback);
  }

  static async delete(id, callback) {
    logger.info("DairyEggs:delete id:"+ id);
    return await db.query('DELETE FROM dairy_eggs WHERE id = ?', [id], callback);
  }
}

module.exports = DairyEggs;
