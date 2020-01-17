// // 1. 유저(모임장)이 동호회 삭제 GET 요청 (club_id) 응답 (200, ok)

// const deleteClub = (req, res)=>{
//   const { clubId } = req.body
//   club.destroy({
//     where:{
//       id: clubId
//     }
//   })
//   .then(result=>{
//     if(result.length ===1){
//       res.status(200).send("삭제 됨")
//     } else {
//       res.status(400).send("")
//     }
//   })
// }

// export default deleteClub
