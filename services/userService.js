const User = require('../models/user');

class UserService {
  static getAllUsers(callback) {
    User.getAll(callback);
  }

  static getUserById(id, callback) {
    User.getById(id, callback);
  }

  static createUser(user, callback) {
    User.create(user, callback);
  }

  static updateUser(id, user, callback) {
    User.update(id, user, callback);
  }

  static deleteUser(id, callback) {
    User.delete(id, callback);
  }
}

module.exports = UserService;
