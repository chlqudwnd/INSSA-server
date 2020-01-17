// 1. 유저가 동호회 생성 POST 요청( title, desciption , hobby , ...)
// 2. 유저의 식별 정보를 통해 database에서 저장 되어있는 정보가 정해진 수 보다 많은 경우를 확인
// (data.length >= 5) true => 응답 (40? , nope) false => 응답 (200, url?)

// const createBoard = (req,res)=>{
//   const userId = req.session.userid
//   const { clubname, max , field , cate_id , created_date } = req.body
//   club.findAll({
//     where:{
//       userid: userId
//     }
//   })
//   .then(result=>{
//     if(result.lnegth > 5){
//       res.status(409).send("5개 초과 안됨")
//     } else {
//       club.create({
//         id: 0,
//         cate_id: cate_id,
//         user_id: userId,
//         field: field,
//         createdAt: new Date.now(),
//         updatedAt: new Date.now()
//       })
//       .then(()=>{
//         res.status(200).send("someurl")
//       })
//       .catch(err=>{
//         console.log(err)
//       })
//     }
//   })
// }

// export default createBoard
