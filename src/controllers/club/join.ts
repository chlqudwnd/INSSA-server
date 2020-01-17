// // 1. 유저가 동호회에 get 가입 요청 (club_id, user_id) 응답 (200, ok)
// // 거절을 한다면 응답(40?, 안돼 돌아가)

// const clubJoin = (req, res) =>{
//   const { clubId } = req.body
//   const userId = req.session.userid
//   club_user_join.create({
//     club_id: clubId,
//     user_id: userId,
//     join_status: "true"
//   })
//   .then(result=>{
//     req.session.clubid = clubId
//     res.status(201).send("ok")
//   })
//   .catch(err=>{
//     res.status(400).send("err")
//   })

// }

// export default clubJoin
