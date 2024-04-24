const MeatSeafoodService = require('../services/meat-seafood-service');
const logger = require("../build/logger.js").logger;

class MeatSeafoodController {
  static async getAllMeatSeafood(req, res) {
    return await MeatSeafoodService.getAllMeatAndSeafood((err, meatseafood) => {
      if (err) {
        logger.error('Error retrieving meat and seafood:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(meatseafood);
    });
  }

  static async getMeatSeafoodById(req, res) {
    const meatSeafoodId = req.params.id;
    return await MeatSeafoodService.getMeatAndSeafoodById(meatSeafoodId, (err, meatseafood) => {
      if (err) {
        logger.error('Error retrieving meat and seafood:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(meatseafood);
      })
  }

  static async createMeatSeafood(req, res) {
    const meatseafood = req.body;
    logger.info("meatseafood object : " + JSON.stringify(meatseafood));
    return await MeatSeafoodService.createMeatAndSeafood(meatseafood, (err, meatseafood) => {
      if (err) {
        logger.error('Error creating retrieving meat and seafood:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(meatseafood);
      })
  }

  static async updateMeatSeafood(req, res) {
    const meatseafood = req.body;
    const meatSeafoodId = req.params.id;
    return await MeatSeafoodService.updateMeatAndSeafood(meatSeafoodId, meatseafood, (err, meatseafood) => {
      if (err) {
        logger.error('Error updating retrieving meat and seafood:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(meatseafood);
      })
  }

  static async deleteMeatSeafood(req, res) {
    const meatSeafoodId = req.params.id;
    return await MeatSeafoodService.deleteMeatAndSeafood(meatSeafoodId, (err, result) => {
      if (err) {
        logger.error('Error deleting retrieving meat and seafood:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'MeatSeafood not found' });
        return;
      }

      res.sendStatus(204); // No content
      })
  }
}

module.exports = MeatSeafoodController;
