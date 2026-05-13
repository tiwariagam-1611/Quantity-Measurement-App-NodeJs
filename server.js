const app = require('./src/app');
const sequelize = require('./src/config/db.config');

const PORT = process.env.PORT || 8080;

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database synchronized successfully.");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    })
    .catch(err => {
        console.error("Failed to sync database: ", err);
    });