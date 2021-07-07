const express = require('express');
const router = express.Router();
// let auth = require('../middlewares/validingInputs')
const profissionalsController = require('../controllers/professionalsController')
const jwtAuth = require('../middlewares/jwtAuth')

router.get('/all', jwtAuth.verifyToken, profissionalsController.all)
router.get('/:id', jwtAuth.verifyToken, profissionalsController.details)

module.exports = router;