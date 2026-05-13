const express = require('express');
const cors = require('cors');
const { globalErrorHandler } = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth.routes');
const quantityRoutes = require('./routes/quantity.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/quantity', quantityRoutes);

app.use(globalErrorHandler);

module.exports = app;