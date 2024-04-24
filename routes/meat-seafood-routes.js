const express = require('express');
const router = express.Router();
const MeatSeafoodController = require('../controllers/meat-seafood-controller');


router.get('/', MeatSeafoodController.getAllMeatSeafood);

router.get('/:id', MeatSeafoodController.getMeatSeafoodById);

router.post("/", MeatSeafoodController.createMeatSeafood)

router.put("/:id", MeatSeafoodController.updateMeatSeafood)

router.delete("/:id", MeatSeafoodController.deleteMeatSeafood)


module.exports = router;
