```text
# Quantity Measurement API

A Node.js + Express + PostgreSQL backend application for performing quantity measurement operations such as:

- Unit Conversion
- Comparison
- Addition
- Subtraction
- Division

The application also includes:

- JWT Authentication
- Request Validation
- Global Error Handling
- Sequelize ORM
- PostgreSQL Database Integration

--------------------------------------------------
TECH STACK
--------------------------------------------------

Backend:
- Node.js
- Express.js

Database:
- PostgreSQL
- Sequelize ORM

Authentication:
- JWT (JSON Web Token)
- bcryptjs

Validation:
- express-validator

Middleware:
- CORS
- Custom Authentication Middleware
- Global Error Handler

--------------------------------------------------
PROJECT STRUCTURE
--------------------------------------------------

QUANTITYAPP/
│
├── src/
│   ├── config/
│   │   └── db.config.js
│   │
│   ├── controllers/
│   │   └── quantity.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   │
│   ├── models/
│   │   ├── QuantityMeasurement.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── quantity.routes.js
│   │
│   ├── services/
│   │   └── quantity.service.js
│   │
│   ├── utils/
│   │   └── UnitEnum.js
│   │
│   └── app.js
│
├── .env
├── package.json
└── server.js

--------------------------------------------------
FEATURES
--------------------------------------------------

1. Authentication
   - User Registration
   - User Login
   - JWT Token Generation
   - Protected APIs

2. Quantity Operations
   - Convert Units
   - Compare Quantities
   - Add Quantities
   - Subtract Quantities
   - Divide Quantities

3. History Tracking
   - Stores all operations in database
   - Fetch all history
   - Filter by operation
   - Filter by measurement type
   - Count operations

4. Validation & Error Handling
   - Request validation
   - Global error handler
   - Authentication middleware

--------------------------------------------------
SUPPORTED MEASUREMENT TYPES
--------------------------------------------------

1. LENGTH
   - Kilometer
   - Meter
   - Centimeter
   - Millimeter
   - Mile
   - Yard
   - Feet
   - Inches

2. WEIGHT
   - Kilogram
   - Gram
   - Tonne
   - Pound
   - Ounce

3. VOLUME
   - Liter
   - Milliliter
   - Gallon

4. TEMPERATURE
   - Celsius
   - Fahrenheit
   - Kelvin

--------------------------------------------------
INSTALLATION
--------------------------------------------------

1. Clone Repository

git clone <repository-url>

2. Move into project directory

cd QUANTITYAPP

3. Install dependencies

npm install

4. Configure Environment Variables

Create a .env file in the root directory.

Example:

PORT=8080

DB_HOST=localhost
DB_NAME=quantitydb
DB_USER=postgres
DB_PASSWORD=yourpassword

JWT_SECRET=mysecretkey
JWT_EXPIRES_IN=1h

5. Start Application

Development Mode:

npm run dev

Production Mode:

npm start

--------------------------------------------------
DATABASE
--------------------------------------------------

Database Used:
- PostgreSQL

ORM:
- Sequelize

Tables:
1. users
2. quantity_measurements

--------------------------------------------------
API ENDPOINTS
--------------------------------------------------

AUTH APIs
--------------------------------------------------

1. Register User

POST /api/auth/register

Request Body:

{
  "username": "admin",
  "password": "password123"
}

2. Login User

POST /api/auth/login

Request Body:

{
  "username": "admin",
  "password": "password123"
}

Response:

{
  "id": 1,
  "username": "admin",
  "token": "jwt-token"
}

--------------------------------------------------
QUANTITY APIs
--------------------------------------------------

NOTE:
All quantity APIs require JWT token.

Authorization Header:

Authorization: Bearer <token>

--------------------------------------------------

1. Convert Units

POST /api/quantity/convert

Request Body:

{
  "inputValue": 5,
  "inputUnit": "KILOMETER",
  "targetUnit": "METER"
}

--------------------------------------------------

2. Compare Quantities

POST /api/quantity/compare

Request Body:

{
  "inputValue": 100,
  "inputUnit": "CENTIMETER",
  "targetValue": 1,
  "targetUnit": "METER"
}

--------------------------------------------------

3. Add Quantities

POST /api/quantity/add

Request Body:

{
  "inputValue": 1,
  "inputUnit": "METER",
  "targetValue": 50,
  "targetUnit": "CENTIMETER"
}

--------------------------------------------------

4. Subtract Quantities

POST /api/quantity/subtract

--------------------------------------------------

5. Divide Quantities

POST /api/quantity/divide

--------------------------------------------------

6. Get All Operations

GET /api/quantity/all

--------------------------------------------------

7. Get Operations By Type

GET /api/quantity/history/type/LENGTH

--------------------------------------------------

8. Get Operations By Operation

GET /api/quantity/operation/CONVERT

--------------------------------------------------

9. Get Operation Count

GET /api/quantity/count/ADD

--------------------------------------------------
APPLICATION FLOW
--------------------------------------------------

Client Request
    ↓
Routes
    ↓
Middleware
    ↓
Controller
    ↓
Service
    ↓
Model
    ↓
Database

--------------------------------------------------
MIDDLEWARE USED
--------------------------------------------------

1. Authentication Middleware
   - Verifies JWT token
   - Protects APIs

2. Validation Middleware
   - Validates request body
   - Checks required fields

3. Global Error Handler
   - Handles all application errors centrally

--------------------------------------------------
ARCHITECTURE
--------------------------------------------------

The application follows layered architecture:

- Routes Layer
- Middleware Layer
- Controller Layer
- Service Layer
- Model Layer
- Database Layer

--------------------------------------------------
FUTURE IMPROVEMENTS
--------------------------------------------------

- Role Based Authorization
- Swagger API Documentation
- Unit Testing
- Docker Support
- Logging System
- Refresh Tokens
- Pagination
- Rate Limiting

--------------------------------------------------
AUTHOR
--------------------------------------------------

Developed using Node.js, Express.js, Sequelize, and PostgreSQL.
```
