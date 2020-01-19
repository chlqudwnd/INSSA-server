import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieparser from 'cookie-parser';
import basicRouter from './route/basicRouter';
import userRouter from './route/users';
import clubRouter from './route/clubs';
import sessionRouter from './route/sessions';
import commentRouter from './route/comments';
import boardRouter from './route/boards';
import hobbysRouter from './route/hobbys';

const api = express();

api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use(cookieparser());
api.get('/', (req, res) => {
  console.log(req.sessionID);
  res.send('hello');
});
api.use('/api', basicRouter);

api.use('/users', userRouter);
api.use('/clubs', clubRouter);
api.use('/boards', boardRouter);
api.use('/comments', commentRouter);
api.use('/sessions', sessionRouter);
// api.use('/meetings');
api.use('/hobbys', hobbysRouter);
// api.use('/mypage');

export default api;
