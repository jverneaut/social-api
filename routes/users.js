import express from 'express';

import usersControllers from '../controllers/users';

import requireLogin from '../middlewares/requireLogin';

const Router = express.Router();

Router.get('/users', requireLogin, usersControllers.findAll);

export default Router;
