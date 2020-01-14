import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ id: 'hi' });
});

export default app;
