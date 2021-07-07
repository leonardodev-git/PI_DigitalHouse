const express = require('express');
const router = express.Router();
const agendamentos = require('../controllers/agendamentosController');
const jwtAuth = require("../middlewares/jwtAuth");

router.post('/', jwtAuth.verifyToken, agendamentos.create);
router.delete('/:id', jwtAuth.verifyToken, agendamentos.destroy);
router.put('/:id', jwtAuth.verifyToken, agendamentos.update);

module.exports = router;
