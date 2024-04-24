const UserService = require('../services/user-service');
const logger = require("../logger.js").logger;

class UserController {
  static async getAllUsers(req, res) {
    return await UserService.getAllUsers((err, users) => {
      if (err) {
        logger.error('Error retrieving users:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(users);
    });
  }

  static async getUserById(req, res) {
    const userId = req.params.id;
    return await UserService.getUserById(userId, (err, user) => {
      if (err) {
        logger.error('Error retrieving users:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(user);
      })
  }

  static async createUser(req, res) {
    const user = req.body;
    logger.info("user object : " + JSON.stringify(user));
    return await UserService.createUser(user, (err, user) => {
      if (err) {
        logger.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(user);
      })
  }

  static async updateUser(req, res) {
    const user = req.body;
    const userId = req.params.id;
    return await UserService.updateUser(userId, user, (err, user) => {
      if (err) {
        logger.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(user);
      })
  }

  static async deleteUser(req, res) {
    const userId = req.params.id;
    return await UserService.deleteUser(userId, (err, result) => {
      if (err) {
        logger.error('Error deleting user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.sendStatus(204); // No content
      })
  }
}

module.exports = UserController;
