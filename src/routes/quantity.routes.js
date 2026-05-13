const express = require('express');
const router = express.Router();
const quantityController = require('../controllers/quantity.controller');
const { validateQuantityRequest } = require('../middleware/validation');
const { verifyToken } = require('../middleware/auth');

router.use(verifyToken);

router.post('/convert', validateQuantityRequest, quantityController.convert);
router.post('/compare', validateQuantityRequest, quantityController.compare);
router.post('/add', validateQuantityRequest, quantityController.add);
router.post('/subtract', validateQuantityRequest, quantityController.subtract);
router.post('/divide', validateQuantityRequest, quantityController.divide);
router.get('/all', quantityController.getAll);
router.get('/operation/:operation', quantityController.getByOperation);
router.get('/history/type/:type', quantityController.getByType);
router.get('/count/:operation', quantityController.getCount);

module.exports = router;