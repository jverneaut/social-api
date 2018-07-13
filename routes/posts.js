import express from 'express';

import requireLogin from '../middlewares/requireLogin';
import postsControllers from '../controllers/posts';

const Router = express.Router();

Router.get('/posts', requireLogin, postsControllers.findAll);

export default Router;
