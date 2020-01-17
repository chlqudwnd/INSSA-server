// import express from 'express'

// const  router = express.Router()

// // commentList get 요청
// //
// router.get('/', (req,res)=>{
//   const { boardId } = req.body
//   comment.findAll({
//     where:{
//       boardId: boardId
//     }
//   })
//   .then(results=>{
//     if(results.length){
//       res.status(200).send(results)
//     } else {
//       res.status(404).send("not found")
//     }
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// })

// // comment post 요청

// router.post('/', (req,res)=>{
//   const { boardId, text} = req.body
//   const userId = req.session.userid
//   comment.create({
//     id:0,
//     boardId: boardId,
//     userId: userId,
//     text: text,
//     createdAt: new Date.now(),
//     updatedAt: new Date.now()
//   })
//   .then(result=>{
//     res.status(201).send(result)
//   })
//   .catch(err=>{
//     res.status(401).send(err)
//   })
// })

// // comment patch 요청

// router.patch('/', (req,res)=>{
//   const { boardId, text} = req.body
//   const userId = req.session.userid
//   comment.update({
//     text: text
//   },{
//     where:{
//       boardId: boardId,
//       userId: userId
//     }
//   })
//   .then(result=>{
//     res.status(201).send(result)
//   })
//   .catch(err=>{
//     res.status(401).send(err)
//   })
// })

// // comment delete 요청

// router.delete('/', (req,res)=>{
//   const { boardId } = req.body
//   const userId = req.session.userid

//   comment.destroy({
//     where:{
//       boardId: boardId,
//       userId: userId
//     }
//   })
//   .then(result=>{
//     if(result.length === 1){
//       res.status(200).send("ok")
//     } else {
//       res.status(401).send("nope")
//     }
//   })
//   .catch(err=>{
//     console.error(err)
//   })
// })

// export default router
