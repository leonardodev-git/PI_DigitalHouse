var express = require('express');
var router = express.Router();
const { check, validationResult, body } = require('express-validator');
const indexController = require('../controllers/indexController')


const dateValidation = [
  check("email").isEmail().withMessage("Email invalido"),
  check("senha").isLength({ min: 3 }).withMessage("Senha deve conter mínimo 6 caracteres")
]

/* GET home page. */
router.get('/', indexController.index)
router.post("/", dateValidation, indexController.newUser)






module.exports = router;
