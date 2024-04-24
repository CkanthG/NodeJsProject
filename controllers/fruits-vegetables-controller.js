const FruitsVegetablesService = require('../services/fruits-vegetables-service');
const logger = require("../build/logger.js").logger;

class FruitsVegetablesController {
  static async getAllFruitsVegetables(req, res) {
    return await FruitsVegetablesService.getAllFruitsVegetables((err, fruitsvegetables) => {
      if (err) {
        logger.error('Error retrieving fruits vegetables:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(fruitsvegetables);
    });
  }

  static async getFruitsVegetablesById(req, res) {
    const fruitsvegetablesId = req.params.id;
    return await FruitsVegetablesService.getFruitsVegetablesById(fruitsvegetablesId, (err, fruitsvegetables) => {
      if (err) {
        logger.error('Error retrieving fruits vegetables:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(fruitsvegetables);
      })
  }

  static async createFruitsVegetables(req, res) {
    const fruitsvegetables = req.body;
    logger.info("fruitsvegetables object : " + JSON.stringify(fruitsvegetables));
    return await FruitsVegetablesService.createFruitsVegetables(fruitsvegetables, (err, fruitsvegetables) => {
      if (err) {
        logger.error('Error creating retrieving fruits vegetables:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(fruitsvegetables);
      })
  }

  static async updateFruitsVegetables(req, res) {
    const fruitsvegetables = req.body;
    const fruitsvegetablesId = req.params.id;
    return await FruitsVegetablesService.updateFruitsVegetables(fruitsvegetablesId, fruitsvegetables, (err, fruitsvegetables) => {
      if (err) {
        logger.error('Error updating retrieving fruits vegetables:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(fruitsvegetables);
      })
  }

  static async deleteFruitsVegetables(req, res) {
    const fruitsvegetablesId = req.params.id;
    return await FruitsVegetablesService.deleteFruitsVegetables(fruitsvegetablesId, (err, result) => {
      if (err) {
        logger.error('Error deleting retrieving fruits vegetables:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'fruitsvegetables not found' });
        return;
      }

      res.sendStatus(204); // No content
      })
  }
}

module.exports = FruitsVegetablesController;
