const MeatSeafood = require('../models/meat-seafood');

class MeatSeafoodService {
  static async getAllMeatAndSeafood(callback) {
    return await MeatSeafood.getAll(callback);
  }

  static async getMeatAndSeafoodById(id, callback) {
    return await MeatSeafood.getById(id, callback);
  }

  static async createMeatAndSeafood(meatseafood, callback) {
    return await MeatSeafood.create(meatseafood, callback);
  }

  static async updateMeatAndSeafood(id, meatseafood, callback) {
    return await MeatSeafood.update(id, meatseafood, callback);
  }

  static async deleteMeatAndSeafood(id, callback) {
    return await MeatSeafood.delete(id, callback);
  }
}

module.exports = MeatSeafoodService;
