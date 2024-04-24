const PantryStaplesService = require('../services/pantry-staples-service');
const logger = require("../build/logger.js").logger;

class PantryStaplesController {
  static async getAllPantryStaples(req, res) {
    return await PantryStaplesService.getAllPantryStaples((err, pantrystaples) => {
      if (err) {
        logger.error('Error retrieving pantry staples:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(pantrystaples);
    });
  }

  static async getPantryStaplesById(req, res) {
    const pantryStaplesId = req.params.id;
    return await PantryStaplesService.getPantryStaplesById(pantryStaplesId, (err, pantrystaples) => {
      if (err) {
        logger.error('Error retrieving pantry staples:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(pantrystaples);
      })
  }

  static async createPantryStaples(req, res) {
    const pantrystaples = req.body;
    logger.info("PantryStaples object : " + JSON.stringify(pantrystaples));
    return await PantryStaplesService.createPantryStaples(pantrystaples, (err, pantrystaples) => {
      if (err) {
        logger.error('Error creating retrieving pantry staples:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(pantrystaples);
      })
  }

  static async updatePantryStaples(req, res) {
    const PantryStaples = req.body;
    const pantryStaplesId = req.params.id;
    return await PantryStaplesService.updatePantryStaples(pantryStaplesId, pantrystaples, (err, pantrystaples) => {
      if (err) {
        logger.error('Error updating retrieving pantry staples:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(pantrystaples);
      })
  }

  static async deletePantryStaples(req, res) {
    const pantryStaplesId = req.params.id;
    return await PantryStaplesService.deletePantryStaples(pantryStaplesId, (err, result) => {
      if (err) {
        logger.error('Error deleting retrieving pantry staples:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'PantryStaples not found' });
        return;
      }

      res.sendStatus(204); // No content
      })
  }
}

module.exports = PantryStaplesController;
