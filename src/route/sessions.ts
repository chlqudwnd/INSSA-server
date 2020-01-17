// import express from 'express';
// import mypageRouter from './mypage';

// const router = express.Router();

// // 로그인 요청을 보낸 사용자 처리
// router.post('/', (req, res) => {
//   const { id, password } = req.body;
//   user
//     .findOne({
//       where: {
//         id: id,
//         password: password,
//       },
//     })
//     .then(result => {
//       if (!result) {
//         res.status(404).send('not found');
//       } else {
//         req.session.userid = result.dataValues.id;
//         session.create({
//           id: result.dataValues.id,
//         });
//         res.status(200).send({ id: result.dataValues.id });
//       }
//     });
// });
// // 로그아웃 요청을 보낸 사용자 처리
// router.get('/', (req, res) => {
//   const userId = req.session.id;
//   session
//     .destroy({
//       where: {
//         userId,
//       },
//     })
//     .then(result => {
//       if (result.length === 1) {
//         res.status(200).send('ok');
//       } else {
//         res.status(404).send('not found');
//       }
//     });
// });

// export default router;
