import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import basicRouter from './route/basicRouter';

const api = express();

api.use(cors());
api.use(bodyParser());
api.use('/api', basicRouter);

export default api;
