import express from 'express';

const router = express.Router();

// //동호회 메인 페이지 get 요청
// router.get('/', (req,res)=>{

// });

// // 동호회 생성 post 요청
// router.post('/', (req,res)=>{
//   const userId = req.session.userid
//   const { hobbyId, name, max , field} = req.body
//   club.findAll({
//     where:{
//       userid: userId
//     }
//   })
//   .then(result=>{
//     if(result.lnegth > 5){
//       res.status(409).send("5개 초과 안됨")
//     } else {
//       club.create({
//         id: 0,
//         hobbyId: hobbyId,
//         userId: userId,
//         name: name,
//         max: max,
//         field: field,
//         createdAt: new Date.now(),
//         updatedAt: new Date.now()
//       })
//       .then((result)=>{
//         res.status(200).send(result)
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//     }
//   })
// });

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
