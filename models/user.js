const db = require('../config/db');

class User {
  static getAll(callback) {
    db.query('SELECT * FROM nodejs_users', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM nodejs_users WHERE id = ?', [id], callback);
  }

  static create(user, callback) {
    console.log(user.name)
    console.log(user.create_time)
    db.query('INSERT INTO nodejs_users (name, create_time) VALUES (?, ?)', [user.name, user.create_time], callback);
  }

  static update(id, user, callback) {
    db.query('UPDATE nodejs_users SET name=?, create_time=? WHERE id = ?', [user.name, user.create_time, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM nodejs_users WHERE id = ?', [id], callback);
  }
}

module.exports = User;
