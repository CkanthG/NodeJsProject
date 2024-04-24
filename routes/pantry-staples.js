const express = require('express');
const router = express.Router();
const PantryStaplesController = require('../controllers/pantry-staples-controller');


router.get('/', PantryStaplesController.getAllPantryStaples);

router.get('/:id', PantryStaplesController.getPantryStaplesById);

router.post("/", PantryStaplesController.createPantryStaples)

router.put("/:id", PantryStaplesController.updatePantryStaples)

router.delete("/:id", PantryStaplesController.deletePantryStaples)


module.exports = router;
