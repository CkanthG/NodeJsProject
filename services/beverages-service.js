const Beverages = require('../models/beverages');

class BeveragesService {
  static async getAllBeverages(callback) {
    return await Beverages.getAll(callback);
  }

  static async getBeveragesById(id, callback) {
    return await Beverages.getById(id, callback);
  }

  static async createBeverages(beverages, callback) {
    return await Beverages.create(beverages, callback);
  }

  static async updateBeverages(id, beverages, callback) {
    return await Beverages.update(id, beverages, callback);
  }

  static async deleteBeverages(id, callback) {
    return await Beverages.delete(id, callback);
  }
}

module.exports = BeveragesService;
