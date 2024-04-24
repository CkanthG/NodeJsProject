const DairyEggsService = require('../services/dairy-eggs-service');
const logger = require("../build/logger.js").logger;

class DairyEggsController {
  static async getAllDairyEggs(req, res) {
    return await DairyEggsService.getAllDairyEggs((err, dairyeggs) => {
      if (err) {
        logger.error('Error retrieving dairy eggs:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(dairyeggs);
    });
  }

  static async getDairyEggsById(req, res) {
    const dairyEggsId = req.params.id;
    return await DairyEggsService.getDairyEggsById(dairyEggsId, (err, dairyeggs) => {
      if (err) {
        logger.error('Error retrieving dairy eggs:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(dairyeggs);
      })
  }

  static async createDairyEggs(req, res) {
    const dairyeggs = req.body;
    logger.info("DairyEggs object : " + JSON.stringify(dairyeggs));
    return await DairyEggsService.createDairyEggs(dairyeggs, (err, dairyeggs) => {
      if (err) {
        logger.error('Error creating retrieving dairy eggs:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(dairyeggs);
      })
  }

  static async updateDairyEggs(req, res) {
    const DairyEggs = req.body;
    const dairyEggsId = req.params.id;
    return await DairyEggsService.updateDairyEggs(dairyEggsId, dairyeggs, (err, dairyeggs) => {
      if (err) {
        logger.error('Error updating retrieving dairy eggs:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(dairyeggs);
      })
  }

  static async deleteDairyEggs(req, res) {
    const dairyEggsId = req.params.id;
    return await DairyEggsService.deleteDairyEggs(dairyEggsId, (err, result) => {
      if (err) {
        logger.error('Error deleting retrieving dairy eggs:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'DairyEggs not found' });
        return;
      }

      res.sendStatus(204); // No content
      })
  }
}

module.exports = DairyEggsController;
