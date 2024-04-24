const express = require('express');
const router = express.Router();
const FruitsVegetablesController = require('../controllers/fruits-vegetables-controller');


router.get('/', FruitsVegetablesController.getAllFruitsVegetables);

router.get('/:id', FruitsVegetablesController.getFruitsVegetablesById);

router.post("/", FruitsVegetablesController.createFruitsVegetables)

router.put("/:id", FruitsVegetablesController.updateFruitsVegetables)

router.delete("/:id", FruitsVegetablesController.deleteFruitsVegetables)


module.exports = router;
