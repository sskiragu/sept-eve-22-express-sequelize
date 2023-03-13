import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import db from './models/index.js';

dotenv.config();

const sequelize = db.sequelize;

//creating an instance of express
const app = express();

sequelize.sync()

app.use(userRoutes);

//define port and hostname
const port = process.env.PORT || 5000;
const hostname = 'localhost';

app.listen(port, hostname, () => {
    console.log(`Server started on ${hostname}:${port}`);
});