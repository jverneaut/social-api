import express from 'express';

import requireLogin from '../middlewares/requireLogin';
import postsControllers from '../controllers/posts';

const Router = express.Router();

Router.route('/posts')
  .get(requireLogin, postsControllers.findAll)
  .post(requireLogin, postsControllers.createOne);

Router.get('/posts/:postId', requireLogin, postsControllers.findOne);

export default Router;
