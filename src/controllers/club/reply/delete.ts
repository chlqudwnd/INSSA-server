// // 1. 유저가 댓글 삭제 get요청 (comment_id, user_id) 응답 (200, save)

// const deleteReply = (req,res) =>{
//   const { userId } = req.session
//   const commentId = req.body
//   reply.destroy({
//     where:{
//       id: commentId,
//       user_id: userId
//     }
//   })
//   .then(result=>{
//     if(result.length === 1){
//       res.status(200).send("ok")
//     } else {
//       res.status(404).send("not found")
//     }
//   })
// }

// export default deleteReply
