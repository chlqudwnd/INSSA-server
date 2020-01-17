// // 1. 해당 동호회에 가입한 유저가 get 요청 (club_id ) 응답 (200, boardList)

// const mainPage = (req,res)=>{
//   const { clubId , userId } = req.session

//   club_board.findAll({
//     where:{
//       club_Id: clubId
//     }
//   })
//   .then(result=>{
//     if(result.length){
//       res.status(200).send(result)
//     }else{
//       res.status(404).send("not found")
//     }
//   })
// }

// export default mainPage
