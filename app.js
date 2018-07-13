import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';

import authRoutes from './routes/auth';
import postsRoutes from './routes/posts';
import usersRoutes from './routes/users';

const app = express();

app.use(morgan('dev'));
app.use(session({
  secret: 'work hard',
  saveUninitialized: false,
  resave: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoutes);
app.use(postsRoutes);
app.use(usersRoutes);

export default app;
