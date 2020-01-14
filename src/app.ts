import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import basicRouter from './route/basicRouter';

const app = express();

app.use(cors());
app.use(bodyParser());
app.use('/someurl', basicRouter);

export default app;
