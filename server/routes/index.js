var express = require('express');
var router = express.Router();
var controller = require('../controllers/randomizer')

router.get('/', controller.randomizer)

module.exports = router;
