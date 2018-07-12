import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';

import usersRoutes from './routes/users';

const app = express();

app.use(morgan('dev'));
app.use(session({ secret: 'work hard', saveUninitialized: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(usersRoutes);

export default app;
