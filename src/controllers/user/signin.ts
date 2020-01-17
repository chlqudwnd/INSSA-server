// 1. 유저가 로그인 POST 요청 (email, password)
// 2. database 에서 요청한 정보가 일치 하는 데이터가 있는지 확인
//  true => 응답(200, session) false => 응답 (404, not found)

// const signin = (req, res) =>{ // password는 crypto 모듈화 시켜서 처리
//   const { email , password } = req.body;
//   user.findOne({
//     where:{
//       email: email,
//       password: password
//     }
//   })
//   .then(result=>{
//     if(!result){
//       res.status(404).send("not found")
//     }else{
//       req.session.userid = result.dataValues.id
//       res.status(200).send({id: result.dataValues.id})
//     }
//   })
// }
// export default signin
