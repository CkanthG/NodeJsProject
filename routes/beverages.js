const express = require('express');
const router = express.Router();
const BeveragesController = require('../controllers/beverages-controller');


router.get('/', BeveragesController.getAllBeverages);

router.get('/:id', BeveragesController.getBeveragesById);

router.post("/", BeveragesController.createBeverages)

router.put("/:id", BeveragesController.updateBeverages)

router.delete("/:id", BeveragesController.deleteBeverages)


module.exports = router;
