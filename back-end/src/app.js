/* eslint-disable import/extensions */
import express from 'express';
import './database/index.js';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler.js';

import routes from './routes.js';

const app = express();
const PORT = 3500;

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log('Y | SERVER STARTED'));
