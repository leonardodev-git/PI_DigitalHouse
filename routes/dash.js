var express = require('express');
var router = express.Router();
var dashController = require('../controllers/dashController')


/* GET users listing. */
router.get('/', dashController.index);

module.exports = router;
