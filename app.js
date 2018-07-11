import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(usersRoutes);

export default app;
