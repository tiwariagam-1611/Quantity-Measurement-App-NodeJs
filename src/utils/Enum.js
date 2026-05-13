const MeasurementType = {
    LENGTH: 'LENGTH',
    WEIGHT: 'WEIGHT',
    VOLUME: 'VOLUME',
    TEMPERATURE: 'TEMPERATURE'
};

const UnitConfig = {
    KILOMETER: { type: MeasurementType.LENGTH, factor: 1000 },
    METER: { type: MeasurementType.LENGTH, factor: 1 },
    CENTIMETER: { type: MeasurementType.LENGTH, factor: 0.01 },
    MILLIMETER: { type: MeasurementType.LENGTH, factor: 0.001 },
    MILE: { type: MeasurementType.LENGTH, factor: 1609.34 },
    YARD: { type: MeasurementType.LENGTH, factor: 0.9144 },
    FEET: { type: MeasurementType.LENGTH, factor: 0.3048 },
    INCHES: { type: MeasurementType.LENGTH, factor: 0.0254 },

    KILOGRAM: { type: MeasurementType.WEIGHT, factor: 1 },
    GRAM: { type: MeasurementType.WEIGHT, factor: 0.001 },
    TONNE: { type: MeasurementType.WEIGHT, factor: 1000 },
    POUND: { type: MeasurementType.WEIGHT, factor: 0.453592 },
    OUNCE: { type: MeasurementType.WEIGHT, factor: 0.0283495 },

    LITER: { type: MeasurementType.VOLUME, factor: 1 },
    MILLILITER: { type: MeasurementType.VOLUME, factor: 0.001 },
    GALLON: { type: MeasurementType.VOLUME, factor: 3.78541 },

    CELSIUS: { type: MeasurementType.TEMPERATURE, factor: 1 },
    FAHRENHEIT: { type: MeasurementType.TEMPERATURE, factor: 1 },
    KELVIN: { type: MeasurementType.TEMPERATURE, factor: 1 }
};

const UnitHelper = {
    getType: (unitStr) => {
        const unit = UnitConfig[unitStr.toUpperCase()];
        if (!unit) throw new Error("Invalid unit provided");
        return unit.type;
    },
    toBase: (unitStr, value) => {
        const unit = UnitConfig[unitStr.toUpperCase()];
        if (unit.type === MeasurementType.TEMPERATURE) {
            if (unitStr.toUpperCase() === 'FAHRENHEIT') return (value - 32) * 5 / 9;
            if (unitStr.toUpperCase() === 'KELVIN') return value - 273.15;
            return value;
        }
        return value * unit.factor;
    },
    fromBase: (unitStr, baseValue) => {
        const unit = UnitConfig[unitStr.toUpperCase()];
        if (unit.type === MeasurementType.TEMPERATURE) {
            if (unitStr.toUpperCase() === 'FAHRENHEIT') return (baseValue * 9 / 5) + 32;
            if (unitStr.toUpperCase() === 'KELVIN') return baseValue + 273.15;
            return baseValue;
        }
        return baseValue / unit.factor;
    }
};

module.exports = { MeasurementType, UnitHelper, UnitConfig };