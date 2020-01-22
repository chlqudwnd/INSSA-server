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
import mypageRouter from './route/mypage';
import hobbiesRouter from './route/hobbies';
import searchRouter from './route/searchClub';

const api = express();

api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use(cookieparser());
// api.get('*', (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     res.status(401).send('잘못된 접근입니다 다시 로그인 해주세요');
//   } else {
//     next();
//   }
// });
api.use('/api', basicRouter);
api.use('/clubs', clubRouter);
api.use('/users', userRouter);
api.use('/boards', boardRouter);
api.use('/comments', commentRouter);
api.use('/sessions', sessionRouter);
api.use('/mypage', mypageRouter);
api.use('/hobbies', hobbiesRouter);
api.use('/search', searchRouter);

export default api;
