// 1. 유저가 나의 관심사 목록  get 요청 ( session ) 유저가 가지고있는 식별 가능한 정보를 통해서 database에서 정보를 꺼내서 응답(200, data)

// const hobbyList = (req, res) =>{
//   const userId = req.session.userid
//   cate_user_join.findAll({
//     where:{
//       user_id: userId
//     }
//   })
//   .then(result=>{
//     if(result.length){
//       res.status(200).send(result.dataValues)
//     } else {
//       res.status(404).send("not found")
//     }
//   })
// }

// export default hobbyList
