import express from 'express';

import requireLogin from '../middlewares/requireLogin';
import usersControllers from '../controllers/users';

const Router = express.Router();

Router.get('/users', requireLogin, usersControllers.findAll);

export default Router;
