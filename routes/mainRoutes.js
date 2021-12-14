const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/', mainController.getMainPage);

router.get('/getdate', mainController.getDate);

router.get('/getweekday', mainController.getWeekDay);

router.post('/', mainController.postWish);
router.post('/deleteWish', mainController.deleteWish);

module.exports = router;