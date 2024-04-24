const PantryStaples = require('../models/pantry-staples');

class PantryStaplesService {
  static async getAllPantryStaples(callback) {
    return await PantryStaples.getAll(callback);
  }

  static async getPantryStaplesById(id, callback) {
    return await PantryStaples.getById(id, callback);
  }

  static async createPantryStaples(pantrystaples, callback) {
    return await PantryStaples.create(pantrystaples, callback);
  }

  static async updatePantryStaples(id, pantrystaples, callback) {
    return await PantryStaples.update(id, pantrystaples, callback);
  }

  static async deletePantryStaples(id, callback) {
    return await PantryStaples.delete(id, callback);
  }
}

module.exports = PantryStaplesService;
