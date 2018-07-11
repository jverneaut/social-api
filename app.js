import express from 'express';

import usersRoutes from './routes/users';

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello, World!' });
});

app.use(usersRoutes);

export default app;
