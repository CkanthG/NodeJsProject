const FruitsVegetables = require('../models/fruits-vegetables');

class FruitsVegetablesService {
  static async getAllFruitsVegetables(callback) {
    return await FruitsVegetables.getAll(callback);
  }

  static async getFruitsVegetablesById(id, callback) {
    return await FruitsVegetables.getById(id, callback);
  }

  static async createFruitsVegetables(fruitsvegetables, callback) {
    return await FruitsVegetables.create(fruitsvegetables, callback);
  }

  static async updateFruitsVegetables(id, fruitsvegetables, callback) {
    return await FruitsVegetables.update(id, fruitsvegetables, callback);
  }

  static async deleteFruitsVegetables(id, callback) {
    return await FruitsVegetables.delete(id, callback);
  }
}

module.exports = FruitsVegetablesService;
