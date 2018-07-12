import express from 'express';

import authControllers from '../controllers/auth';

const Router = express.Router();

Router.post('/auth/login', authControllers.login);
Router.get('/auth/logout', authControllers.logout);
Router.post('/auth/signup', authControllers.signup);

export default Router;
