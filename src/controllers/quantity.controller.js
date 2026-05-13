const quantityService = require('../services/quantity.service');

exports.convert = async (req, res, next) => {
    try {
        const result = await quantityService.convert(req.body);
        res.status(200).json(result);
    } catch (error) { next(error); } // Passing error to centralized error handler
};

exports.compare = async (req, res, next) => {
    try {
        const result = await quantityService.compare(req.body);
        res.status(200).json(result);
    } catch (error) { next(error); }
};

exports.add = async (req, res, next) => {
    try {
        const result = await quantityService.add(req.body);
        res.status(200).json(result);
    } catch (error) { next(error); }
};

exports.subtract = async (req, res, next) => {
    try {
        const result = await quantityService.subtract(req.body);
        res.status(200).json(result);
    } catch (error) { next(error); }
};

exports.divide = async (req, res, next) => {
    try {
        const result = await quantityService.divide(req.body);
        res.status(200).json(result);
    } catch (error) { next(error); }
};

exports.getAll = async (req, res, next) => {
    try {
        const result = await quantityService.getAll();
        res.status(200).json(result);
    } catch (error) { next(error); }
};

exports.getByOperation = async (req, res, next) => {
    try {
        const result = await quantityService.getByOperation(req.params.operation.toUpperCase());
        res.status(200).json(result);
    } catch (error) { next(error); }
};

exports.getByType = async (req, res, next) => {
    try {
        const result = await quantityService.getByType(req.params.type);
        res.status(200).json(result);
    } catch (error) { next(error); }
};

exports.getCount = async (req, res, next) => {
    try {
        const count = await quantityService.getCount(req.params.operation.toUpperCase());
        res.status(200).json({ operation: req.params.operation, count });
    } catch (error) { next(error); }
};