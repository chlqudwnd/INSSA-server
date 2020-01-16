import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import basicRouter from './route/basicRouter';
import userRouter from './route/user';
import clubRouter from './route/club';

const app = express();

app.use(cors());
app.use(bodyParser());
app.use('/someurl', basicRouter);

app.use('/user', userRouter);
app.use('/club', clubRouter);

export default app;
