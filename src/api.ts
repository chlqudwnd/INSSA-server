import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import basicRouter from './route/basicRouter';
import userRouter from './route/users';
import clubRouter from './route/clubs';

const api = express();

api.use(cors());
api.use(bodyParser());
api.use('/api', basicRouter);

api.use('/users', userRouter);
api.use('/clubs', clubRouter);
api.use('/boards');
api.use('/comments');
api.use('/sessions');
api.use('/meetings');
api.use('/mypage');

export default api;
