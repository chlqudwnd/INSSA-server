//1. 유저가 회원탈퇴 POST 요청 ( session ) 식별 가능한 데이터를 통해 database에 있는 정보들을 삭제, 응답 (200, ok)
// mypage에서 관리

// const deleteUser = (req,res)=>{
//   const userId = req.session.userid
//   user.destroy({
//     where:{
//       id: userId
//     }
//   })
//   .then(result=>{
//     if(result === 1){
//       res.status(200).send("삭제됨")
//     } else{
//       res.status(404).send("")
//     }
//   })
// }

// export default deleteUser
