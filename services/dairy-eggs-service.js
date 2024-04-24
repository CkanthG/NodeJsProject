const DairyEggs = require('../models/dairy-eggs');

class DairyEggsService {
  static async getAllDairyEggs(callback) {
    return await DairyEggs.getAll(callback);
  }

  static async getDairyEggsById(id, callback) {
    return await DairyEggs.getById(id, callback);
  }

  static async createDairyEggs(dairyeggs, callback) {
    return await DairyEggs.create(dairyeggs, callback);
  }

  static async updateDairyEggs(id, dairyeggs, callback) {
    return await DairyEggs.update(id, dairyeggs, callback);
  }

  static async deleteDairyEggs(id, callback) {
    return await DairyEggs.delete(id, callback);
  }
}

module.exports = DairyEggsService;
