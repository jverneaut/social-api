import express from 'express';

const Router = express.Router();

Router.get('/users', (req, res) => {
  res.send('Hello users');
});

export default Router;
