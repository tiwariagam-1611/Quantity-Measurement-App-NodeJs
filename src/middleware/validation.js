const { body, validationResult } = require('express-validator');

const validateQuantityRequest = [
    body('inputValue').isNumeric().withMessage('Input value must be a number'),
    body('inputUnit').notEmpty().withMessage('Input unit is required'),
    body('targetUnit').notEmpty().withMessage('Target unit is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateQuantityRequest };