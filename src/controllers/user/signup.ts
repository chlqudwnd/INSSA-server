// 1. 유저가 post 요청 (email, username, password)
// 2. 요청이 온 email을 database에 있는지 확인
// 3. true => 응답 (409, conflic) false => 응답 (200, save)

// const signup = (req, res)=>{ //crypto로 암호화 모듈파일 생성
//   const {
//     email,
//     password,
//     username,
//     phone,
//     address,
//     hobbys,
//     gender,
//     birth,
//     type
//     } = req.body

//     user.findOrCreate({
//       where:{
//         email: email
//       },
//       defaults:{
//         email: email,
//         password: password,
//         username: username,
//         phone: phone,
//         address: address,
//         hobbys: hobbys,
//         gender: gender,
//         birth: birth,
//         type: type
//       }
//     })
//     .spread((user,readted)=>{
//       if(created){
//         res.status(200).send("ok")
//       }else{
//         res.status(409).send("conflic")
//       }
//     })
// }
// export default signup
