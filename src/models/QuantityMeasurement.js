const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const QuantityMeasurement = sequelize.define('QuantityMeasurement', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    inputValue: { type: DataTypes.DOUBLE, allowNull: false },
    inputUnit: { type: DataTypes.STRING, allowNull: false },
    inputMeasurementType: { type: DataTypes.STRING },
    targetValue: { type: DataTypes.DOUBLE },
    targetUnit: { type: DataTypes.STRING },
    targetMeasurementType: { type: DataTypes.STRING },
    operation: { type: DataTypes.STRING },
    resultValue: { type: DataTypes.DOUBLE },
    resultUnit: { type: DataTypes.STRING },
    error: { type: DataTypes.BOOLEAN, defaultValue: false },
    errorMessage: { type: DataTypes.STRING }
}, {
    tableName: 'quantity_measurements',
    timestamps: true, // Automatically handles createdAt and updatedAt hooks
});

module.exports = QuantityMeasurement;