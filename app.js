import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hello, World!' });
});

export default app;
