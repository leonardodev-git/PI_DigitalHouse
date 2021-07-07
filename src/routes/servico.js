const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servicoController');


//localhost:5000/servico
router.get('/', servicoController.teste);
router.post('/', servicoController.teste);
router.put('/', servicoController.teste);
router.delete('/', servicoController.teste);


module.exports = router;