//mypage. 유저가 내 정보 get 요청( session ) 응답 (200, userData)
//1. 유저가 내 정보 POST(수정?) 요청 (editdata?) 응답 (200, ok)

//deleteUser. 유저가 회원탈퇴 POST 요청 ( session ) 식별 가능한 데이터를 통해 database에 있는 정보들을 삭제, 응답 (200, ok)

//hobbylist 유저가 나의 관심사 목록  get 요청 ( session ) 유저가 가지고있는 식별 가능한 정보를 통해서 database에서 정보를 꺼내서 응답(200, data)
// 1.table join을 통해서 user_id를 통해
// 2.user 테이블과 cate_user_join 테이블을 조인한 결과 값을 준다

// const mypage = (req, res) =>{
//   const userId = req.session.userid
//   if(userId){
//     user.findOne({
//       where:{
//         id: userId
//       }
//     })
//     .then(result=>{
//       res.status(200).send(result.dataValues)
//     })
//   }else{
//     res.status(401).send("err")
//   }
// }

// export default mypage
