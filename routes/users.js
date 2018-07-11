import express from 'express';

import usersControllers from '../controllers/users';

const Router = express.Router();

Router.get('/users', usersControllers.findAll);
Router.post('/users', usersControllers.createOne);

export default Router;
