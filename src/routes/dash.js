const express = require('express');
const router = express.Router();
const auth = require('../middlewares/validatingInputs')
const dashController = require('../controllers/dashController')



/* GET users listing. */
router.get('/', auth.auth, dashController.index);
router.get('/checkout/confirm', auth.auth, dashController.confirm)
router.get('/:nome/checkout', auth.auth, dashController.checkout);
router.get('/:nome', auth.auth, dashController.agendamento);



module.exports = router;
