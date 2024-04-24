const BeveragesService = require('../services/beverages-service');
const logger = require("../build/logger.js").logger;

class BeveragesController {
  static async getAllBeverages(req, res) {
    return await BeveragesService.getAllBeverages((err, beverages) => {
      if (err) {
        logger.error('Error retrieving beverages:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(beverages);
    });
  }

  static async getBeveragesById(req, res) {
    const beveragesId = req.params.id;
    return await BeveragesService.getBeveragesById(beveragesId, (err, beverages) => {
      if (err) {
        logger.error('Error retrieving beverages:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(beverages);
      })
  }

  static async createBeverages(req, res) {
    const beverages = req.body;
    logger.info("beverages object : " + JSON.stringify(beverages));
    return await BeveragesService.createBeverages(beverages, (err, beverages) => {
      if (err) {
        logger.error('Error creating retrieving beverages:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(beverages);
      })
  }

  static async updateBeverages(req, res) {
    const beverages = req.body;
    const beveragesId = req.params.id;
    return await BeveragesService.updateBeverages(beveragesId, beverages, (err, beverages) => {
      if (err) {
        logger.error('Error updating retrieving beverages:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(beverages);
      })
  }

  static async deleteBeverages(req, res) {
    const beveragesId = req.params.id;
    return await BeveragesService.deleteBeverages(beveragesId, (err, result) => {
      if (err) {
        logger.error('Error deleting retrieving beverages:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'beverages not found' });
        return;
      }

      res.sendStatus(204); // No content
      })
  }
}

module.exports = BeveragesController;
