// import express from 'express';
// import User from '../data/entity/User';
// import Session from '../data/entity/Session';
// import jwt from 'jsonwebtoken';
// import secret from '../config/jwt';
// import cookieParser = require('cookie-parser');
// const router = express.Router();

// // 로그인 요청을 보낸 사용자 처리
// router.post('/', async (req, res) => {
//   const { id, password } = req.body;
//   const token = jwt.sign({ id: id }, secret, { expiresIn: '60m' });
//   Session.delete({ user: id });
//   User.findOne({
//     where: {
//       id: id,
//       password: password,
//     },
//   })
//     .then(user => {
//       if (user && user.status === 'y') {
//         res.cookie('token', token, {
//           httpOnly: true,
//           expires: new Date(Date.now() + 900000),
//         });
//         Session.create({ id: token, user: user }).save();
//         res.status(200).send('로그인 완료');
//       } else {
//         res.status(404).send('일치하는 정보 없거나 탈퇴한 유저 입니다');
//       }
//     })
//     .catch(err => {
//       res.status(401).send(err);
//     });
// });
// // 로그아웃 요청을 보낸 사용자 처리
// router.get('/', (req, res) => {
//   const token = req.cookies.token;
//   console.log(token);
//   res.clearCookie('token');
//   // if(token){
//   Session.delete({
//     id: token,
//   })
//     .then(result => {
//       console.log('result', result);
//       res.status(200).send('ok');
//     })
//     .catch(err => {
//       res.status(401).json(err);
//     });
//   // } else {
//   // res.status(400).send('잘못된 요청입니다!');
//   // }
// });

// export default router;
