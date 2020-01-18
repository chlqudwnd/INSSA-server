// // import express from 'express';
// // import Comment from '../data/entity/Comment';
// // import Session from '../data/entity/Session';
// // import Board from '../data/entity/Board';
// // import jwt from 'jsonwebtoken';
// // import secret from '../config/jwt';
// // import User from '../data/entity/User';
// // import { Connection } from 'typeorm';
// // const router = express.Router();

// // // // commentList get 요청
// // // //
// // router.get('/:id', (req, res) => {
// //   const { id } = req.params;
// //   console.log();
// //   Comment.find({
// //     where: {
// //       boardId: id,
// //     },
// //   })
// //     .then(results => {
// //       console.log(results);
// //       if (results.length) {
// //         res.status(200).send(results);
// //       } else {
// //         res.status(404).send('not found');
// //       }
// //     })
// //     .catch(err => {
// //       console.error(err);
// //     });
// // });

// // // comment post 요청

// router.post('/:id', async (req, res) => {
//   const token = req.cookies.token;
//   const findUser = Object.values(jwt.verify(token, secret))[0];
//   const user = await User.findOne({ id: findUser });
//   const { text } = req.body;
//   const { id } = req.params;
//   const comment = new Comment();
//   comment.user = findUser;
//   comment.board = id;
//   // Comment.create({text: text, user: user.id, board: params}).save()
//   // .then(result=>{
//   //   res.status(200).send(result)
//   // })
//   // .catch(err=>{
//   //   res.send(err)
//   //   return;
//   // })
// });

// // // comment patch 요청

// // router.patch('/', (req,res)=>{
// //   const { boardId, text} = req.body
// //   const userId = req.session.userid
// //   comment.update({
// //     text: text
// //   },{
// //     where:{
// //       boardId: boardId,
// //       userId: userId
// //     }
// //   })
// //   .then(result=>{
// //     res.status(201).send(result)
// //   })
// //   .catch(err=>{
// //     res.status(401).send(err)
// //   })
// // })

// // // comment delete 요청

// // router.delete('/', (req,res)=>{
// //   const { boardId } = req.body
// //   const userId = req.session.userid

// //   comment.destroy({
// //     where:{
// //       boardId: boardId,
// //       userId: userId
// //     }
// //   })
// //   .then(result=>{
// //     if(result.length === 1){
// //       res.status(200).send("ok")
// //     } else {
// //       res.status(401).send("nope")
// //     }
// //   })
// //   .catch(err=>{
// //     console.error(err)
// //   })
// // })

// export default router;
