import express from 'express';
import mypageRouter from './mypage/mypage';

const router = express.Router();

router.post('/signup');

router.post('/signin');

router.post('/signout');

router.use('/mypage', mypageRouter);
// 1. 유저가 로그인 POST 요청 (email, password)

// 2. database 에서 요청한 정보가 일치 하는 데이터가 있는지 확인
//  true => 응답(200, session) false => 응답 (404, not found)

export default router;
