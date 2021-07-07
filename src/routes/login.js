const express = require('express');
const router = express.Router();
const validatingInputs = require('../middlewares/validatingInputs')
const loginController = require('../controllers/loginController')

router.post('/', validatingInputs.inputsValidationSignin(), loginController.authUser);
router.get('/', validatingInputs.inputsValidationSignin(), loginController.authUser);

module.exports = router;
