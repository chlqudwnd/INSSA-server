// 1. 유저가 가입한 동호회 목록 get 요청( session ) 식별 가능한 데이터를 통해 database에서 정보를 꺼냄, 응답 (200, datalist)
// club_user_join에서 session(user_id) 에 해당 하는 data를 가져옴
// 그리고 club_id 를 통해 동호회(club) 테이블 레프트 조인을 통해 결과값을 줌

// const clubList= (req, res) =>{
//   const userId = req.session.userid
//   club_user_join.findAll({
//     where:{
//       user_id: userId
//     }
//   })
//   .then(result=>{
//     if(result.length){
//       res.status(200).send(result)
//     } else{
//       res.status(404).send("not found")
//     }
//   })
// }
// export default clubList
