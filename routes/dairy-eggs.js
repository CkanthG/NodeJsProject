const express = require('express');
const router = express.Router();
const DairyEggsController = require('../controllers/dairy-eggs-controller');


router.get('/', DairyEggsController.getAllDairyEggs);

router.get('/:id', DairyEggsController.getDairyEggsById);

router.post("/", DairyEggsController.createDairyEggs)

router.put("/:id", DairyEggsController.updateDairyEggs)

router.delete("/:id", DairyEggsController.deleteDairyEggs)


module.exports = router;
