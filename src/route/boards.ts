import express from 'express';

const router = express.Router();

// //동호회 게시판 데이터를 get 요청

// router.get('/', (req,res)=>{
//   const clubId = req.body
//   Board.findAll({
//     where:{
//       club_id: clubId
//     }
//   })
//   .then(result=>{
//     if(result.length){
//       res.status(200).send(result)
//     } else {
//       res.status(404).send("not found")
//     }
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// })

// //동호회 게시판 clubId로 board로 post 요청

// router.post('/', (req,res)=>{
//   const { clubId , title , category , text } = req.body
//   const userId = req.session.userid
//   Board.create({
//     id: 0,
//     club_id: clubId,
//     user_id: userId,
//     title: title,
//     category: category,
//     text: text,
//     createdAt: new Date.now(),
//     updatedAt: new Date.now()
//   })
//   .then(result=>{
//     if(result){
//       res.status(200).send("ok")
//     } else {
//       res.status(401).send("err")
//     }
//   })
//   .catch(err=>{
//     console.error(err)
//   })

// })

// //patch 요청

// router.patch('/', (req,res)=>{
//   const { clubId, title, category, text } =req.body;
//   const userId = req.session.userid
//   Board.update({
//     club_id: clubId,
//     user_id: userId,
//     title: title,
//     category: category,
//     text: text,
//     updatedAt: new Date.now()
//   },{
//     where: {
//       club_id: clubId
//     }
//   })
//   .then(result=>{
//     if(result){
//       res.status(200).send(result)
//     } else {
//       res.status(401).send("nope")
//     }
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// })

// //게시글 delete 요청

// router.delete('/', (req,res)=>{
//   const { clubId } = req.body
//   const userId = req.session.userid
//   Borad.destroy({
//     where:{
//       club_id: clubId,
//       user_id: userId
//     }
//   })
//   .then(result=>{
//     if(result.length === 1){
//       res.status(200).send("ok")
//     } else {
//       res.status(401).send("not found")
//     }
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// })

// // 게시글의 정보를 get 요청
// router.get('/page/:id',(req,res)=>{
// })

export default router;
