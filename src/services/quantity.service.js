const QuantityMeasurement = require('../models/QuantityMeasurement');
const { UnitHelper } = require('../utils/Enum');

class QuantityService {
    
    validateUnits(inputUnit, targetUnit) {
        if (UnitHelper.getType(inputUnit) !== UnitHelper.getType(targetUnit)) {
            throw new Error("Incompatible unit types");
        }
    }

    async buildResponse(dto, resultValue, resultUnit, operation) {
        try {
            // Save to database
            const saved = await QuantityMeasurement.create({
                inputValue: dto.inputValue,
                inputUnit: dto.inputUnit,
                inputMeasurementType: dto.inputMeasurementType || UnitHelper.getType(dto.inputUnit),
                targetValue: dto.targetValue || null,
                targetUnit: dto.targetUnit || null,
                targetMeasurementType: dto.targetUnit ? UnitHelper.getType(dto.targetUnit) : null,
                resultValue: resultValue,
                resultUnit: resultUnit,
                operation: operation,
                error: false
            });
            return this.mapToResponse(saved);
        } catch (error) {
            throw new Error("Database saving failed: " + error.message);
        }
    }

    mapToResponse(entity) {
        return {
            id: entity.id,
            inputValue: entity.inputValue,
            inputUnit: entity.inputUnit,
            resultValue: entity.resultValue,
            resultUnit: entity.resultUnit,
            operation: entity.operation,
            error: entity.error,
            createdAt: entity.createdAt
        };
    }

    async convert(dto) {
        this.validateUnits(dto.inputUnit, dto.targetUnit);
        const base = UnitHelper.toBase(dto.inputUnit, dto.inputValue);
        const result = UnitHelper.fromBase(dto.targetUnit, base);
        return await this.buildResponse(dto, result, dto.targetUnit.toUpperCase(), "CONVERT");
    }

    async compare(dto) {
        this.validateUnits(dto.inputUnit, dto.targetUnit);
        const v1 = UnitHelper.toBase(dto.inputUnit, dto.inputValue);
        const v2 = UnitHelper.toBase(dto.targetUnit, dto.targetValue);
        const isEqual = Math.abs(v1 - v2) < 0.0001;
        return await this.buildResponse(dto, isEqual ? 1 : 0, "BOOLEAN", "COMPARE");
    }

    async add(dto) {
        this.validateUnits(dto.inputUnit, dto.targetUnit);
        const sumBase = UnitHelper.toBase(dto.inputUnit, dto.inputValue) + UnitHelper.toBase(dto.targetUnit, dto.targetValue);
        const result = UnitHelper.fromBase(dto.targetUnit, sumBase);
        return await this.buildResponse(dto, result, dto.targetUnit.toUpperCase(), "ADD");
    }

    async subtract(dto) {
        this.validateUnits(dto.inputUnit, dto.targetUnit);
        const diffBase = UnitHelper.toBase(dto.inputUnit, dto.inputValue) - UnitHelper.toBase(dto.targetUnit, dto.targetValue);
        const result = UnitHelper.fromBase(dto.targetUnit, diffBase);
        return await this.buildResponse(dto, result, dto.targetUnit.toUpperCase(), "SUBTRACT");
    }

    async divide(dto) {
        this.validateUnits(dto.inputUnit, dto.targetUnit);
        const v1 = UnitHelper.toBase(dto.inputUnit, dto.inputValue);
        const v2 = UnitHelper.toBase(dto.targetUnit, dto.targetValue);
        if (v2 === 0) throw new Error("Cannot divide by zero");
        return await this.buildResponse(dto, v1 / v2, "SCALAR", "DIVIDE");
    }

    async getAll() {
        const data = await QuantityMeasurement.findAll();
        return data.map(this.mapToResponse);
    }

    async getByOperation(operation) {
        const data = await QuantityMeasurement.findAll({ where: { operation } });
        return data.map(this.mapToResponse);
    }

    async getErrors() {
        const data = await QuantityMeasurement.findAll({ where: { error: true } });
        return data.map(this.mapToResponse);
    }

    async getByType(type) {
        const data = await QuantityMeasurement.findAll({ where: { inputMeasurementType: type.toUpperCase() } });
        return data.map(this.mapToResponse);
    }

    async getCount(operation) {
        return await QuantityMeasurement.count({ where: { operation } });
    }
}

module.exports = new QuantityService();