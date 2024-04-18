const User = require('../models/user');

class UserService {
  static async getAllUsers(callback) {
    return await User.getAll(callback);
  }

  static async getUserById(id, callback) {
    return await User.getById(id, callback);
  }

  static async createUser(user, callback) {
    return await User.create(user, callback);
  }

  static async updateUser(id, user, callback) {
    return await User.update(id, user, callback);
  }

  static async deleteUser(id, callback) {
    return await User.delete(id, callback);
  }
}

module.exports = UserService;
