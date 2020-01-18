// import express from 'express';
// import User from '../data/entity/User';
// import jwt from 'jsonwebtoken';
// import secret from '../config/jwt';
// const router = express.Router();
// // 1. 유저가 post 요청 (email, username, password)
// // 2. 요청이 온 email을 database에 있는지 확인
// // 3. true => 응답 (409, conflic) false => 응답 (200, save)

// // signup
// router.post('/', async (req, res) => {
//   // crypto로 암호화 모듈파일 생성
//   const { id, password, name, phone, address, gender, birth, type } = req.body;
//   const find = await User.findOne({ id: id });
//   const user =
//     !find &&
//     (await User.create({
//       id: id,
//       password: password,
//       name: name,
//       phone: phone,
//       address: address,
//       gender: gender,
//       birth: birth,
//       type: 'nomal',
//       status: 'y',
//     })
//       .save()
//       .catch(err => {
//         res.send('번호 정확히 입력');
//       }));

//   if (user) {
//     res.send('회원 가입 완료');
//   } else {
//     res.send('중복된 아이디 입니다');
//   }
// });

// // //가입된 모든 회원 보기 요청
// router.get('/', (req, res) => {
//   User.find().then(result => {
//     if (result.length) {
//       res.status(200).send(result);
//     } else {
//       res.status(404).send('not found');
//     }
//   });
// });

// // // 회원 정보 수정 요청

// router.patch('/', (req, res) => {
//   const token = req.cookies.token;
//   const body = req.body;
//   const { id } = body;
//   if (token) {
//     User.update(
//       {
//         id: id,
//       },
//       body,
//     )
//       .then(result => {
//         res.status(201).send(result);
//       })
//       .catch(err => {
//         res.status(400).send(err);
//       });
//   } else {
//     res.status(400).send('잘못된 요청');
//   }
// });

// //회원 탈퇴 요청
// router.delete('/', async (req, res) => {
//   const token = req.cookies.token;
//   const user = Object.values(jwt.verify(token, secret))[0];
//   console.log('name', user);
//   if (user) {
//     User.update(
//       {
//         id: user,
//       },
//       {
//         status: 'd',
//       },
//     )
//       .then(result => {
//         res.clearCookie('token');
//         console.log('result', result);
//         res.status(201).send('bye bye');
//       })
//       .catch(err => {
//         res.status(401).send(err);
//       });
//   } else {
//     res.status(400).send('잘못된 요청입니다');
//   }
// });

// // 1. 유저가 로그인 POST 요청 (email, password)

// // 2. database 에서 요청한 정보가 일치 하는 데이터가 있는지 확인
// //  true => 응답(200, session) false => 응답 (404, not found)

// export default router;
