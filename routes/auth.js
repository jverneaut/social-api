import express from 'express';

import authControllers from '../controllers/auth';

const Router = express.Router();

Router.post('/signup').post(authControllers.signup);
