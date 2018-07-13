import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';

import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import usersRoutes from './routes/users';

import notFound from './middlewares/notFound';
import errorHandler from './middlewares/errorHandler';

require('dotenv').config();

const MongoStore = require('connect-mongo')(session);

const app = express();

app.use(morgan('dev'));
app.use(session({
  secret: 'work hard',
  name: 'sessionId',
  saveUninitialized: false,
  resave: true,
  store: new MongoStore({ url: process.env.MONGO_URI }),
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },

}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoutes);
app.use(postsRoutes);
app.use(usersRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
