import express from 'express';
import { Club } from '../data/entity/Club';
import { Hobby } from '../data/entity/Hobby';
import { User } from '../data/entity/User';
import jwt from 'jsonwebtoken';
import secret from '../config/jwt';

const router = express.Router();

// //동호회 메인 페이지 get 요청
router.get('/', async (req, res) => {
  const clubs = await Club.find();
  res.send(clubs);
});

// 동호회 생성 post 요청
router.post('/', async (req, res) => {
  const { hobbyId, name, max, field } = req.body;
  const token = req.cookies.token;
  const userId = Object.values(jwt.verify(token, secret))[0];
  const host = await User.findOne({ where: { id: userId }, select: ['id'] });
  const hobby = await Hobby.findOne({ where: { id: hobbyId } });
  console.log(host);
  Club.create({
    name: name,
    max: max,
    field: field,
    status: 'ok',
    host: host,
    hobby: hobby,
  })
    .save()
    .then((result: any) => {
      res.status(200).send(result);
    })
    .catch((err: Error) => {
      res.send('중복된 동호회 이름입니다');
    });
});

// //동호회 폐쇠 delete 요청
// router.delete('/', (req, res)=>{
//   const { clubId } = req.body
//   const userId = req.session.userid
//   club.destroy({
//     where:{
//       id: clubId,
//       userId: userId
//     }
//   })
//   .then(result=>{
//     if(result.length ===1){
//       res.status(200).send("삭제 됨")
//     } else {
//       res.status(400).send("")
//     }
//   })
// });

// //동호회 정보 변경 patch 요청
// router.patch('/', (req,res)=>{
//   const { clubId, hobbyId, name, max, field } = req.body
//   const userId = req.session.userid

//   club.update({
//     name: name,
//     max: max,
//     field: field,
//     status: "true"
//   },{
//     where:{
//       id: clubId,
//       hobbyId: hobbyId,
//       userId: userId
//     }
//   })
//   .then(result=>{
//     if(result){
//       res.status(201).send(result)
//     } else {
//       res.status(401).send("")
//     }
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// })

// //
// router.get('/page/:id');

// router.get('/join');

// router.delete('/drop');

export default router;
