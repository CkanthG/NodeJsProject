const db = require('../config/db');
const logger = require("../logger.js").logger;

class User {
  static async getAll(callback) {
    return await db.query('SELECT * FROM users', callback);
  }

  static async getById(id, callback) {
    logger.info('User:getById id:'+id);
    return await db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  }

  static async create(user, callback) {
    logger.info("User:create name:"+ user.name);
    logger.info("User:create create_time:"+ user.create_time);
    return await db.query('INSERT INTO users (name, create_time) VALUES (?, ?)', [user.name, user.create_time], callback);
  }

  static async update(id, user, callback) {
    logger.info("User:update id:"+ id);
    return await db.query('UPDATE users SET name=?, create_time=? WHERE id = ?', [user.name, user.create_time, id], callback);
  }

  static async delete(id, callback) {
    logger.info("User:delete id:"+ id);
    return await db.query('DELETE FROM users WHERE id = ?', [id], callback);
  }
}

module.exports = User;
