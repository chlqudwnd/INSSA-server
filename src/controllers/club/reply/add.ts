// 1. 유저가 댓글 작성 POST 요청 ( user_session, club_session, comment) 응답 (200, save)

// const Addreply = (req,res)=>{
//   const { clubId , userId } = req.session
//   reply.create({
//     id: 0,
//     club_board_id: clubId,
//     user_id: userId
//   })
//   .then(result=>{
//     res.status(200).send(result)
//   })
//   .catch(err=>{
//     res.status(404).send("not found")
//   })
// }

// export default Addreply
