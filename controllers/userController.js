const UserService = require('../services/userService');

class UserController {
  static getAllUsers(req, res) {
    UserService.getAllUsers((err, users) => {
      if (err) {
        console.error('Error retrieving users:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(users);
    });
  }

  static getUserById(req, res) {
    const userId = req.params.id;
    UserService.getUserById(userId, (err, user) => {
      if (err) {
        console.error('Error retrieving users:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(user);
      })
  }

  static createUser(req, res) {
    const user = req.body;
    console.log("user object > ",user);
    UserService.createUser(user, (err, user) => {
      if (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(user);
      })
  }

  static updateUser(req, res) {
    const user = req.body;
    const userId = req.params.id;
    UserService.updateUser(userId, user, (err, user) => {
      if (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(user);
      })
  }

  static deleteUser(req, res) {
    const userId = req.params.id;
    UserService.deleteUser(userId, (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
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
