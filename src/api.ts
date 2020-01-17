import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import basicRouter from './route/basicRouter';
import userRouter from './route/user/user';
import clubRouter from './route/club/club';

const api = express();

api.use(cors());
api.use(bodyParser());
api.use('/api', basicRouter);

api.use('/user', userRouter);
api.use('/club', clubRouter);

export default api;
