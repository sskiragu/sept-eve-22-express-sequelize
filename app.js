import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import db from './models/index.js';

//creating an instance of express
const app = express();

app.use(express.json());

dotenv.config();

const sequelize = db.sequelize;

sequelize.sync()

app.use("/api/v1",userRoutes);
app.use("/api/v1", roleRoutes);

//define port and hostname
const port = process.env.PORT || 5000;
const hostname = 'localhost';

app.listen(port, hostname, () => {
    console.log(`Server started on ${hostname}:${port}`);
});