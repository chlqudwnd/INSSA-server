import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import basicRouter from './route/basicRouter';
import userRouter from './route/users';
import clubRouter from './route/club';

const app = express();

// app.use(
//   session({
//     secret: '@codestates',
//     resave: false,
//     saveUninitialized: true
//   })
// );

app.use(cors());
app.use(bodyParser());
app.use('/someurl', basicRouter);

app.use('/user', userRouter);
app.use('/club', clubRouter);

export default app;
