import express from 'express';
import mypageRouter from './mypage';
import { userInfo } from 'os';

const router = express.Router();
// 1. 유저가 post 요청 (email, username, password)
// 2. 요청이 온 email을 database에 있는지 확인
// 3. true => 응답 (409, conflic) false => 응답 (200, save)

// signup
router.post('/', (req, res) => {
  //crypto로 암호화 모듈파일 생성
  const { id, password, username, phone, address, gender, birth, type } = req.body;

  user
    .findOrCreate({
      where: {
        id: id,
      },
      defaults: {
        id: id,
        password: password,
        username: username,
        phone: phone,
        address: address,
        gender: gender,
        birth: birth,
        type: type,
      },
    })
    .spread((user, created) => {
      if (created) {
        res.status(200).send('ok');
      } else {
        res.status(409).send('conflic');
      }
    });
});

//가입된 모든 회원 보기 요청
router.get('/', (req, res) => {
  user.findAll().then(result => {
    if (result.length) {
      res.status(200).send(result);
    } else {
      res.status(404).send('not found');
    }
  });
});

//회원 탈퇴 요청
router.delete('/', (req, res) => {
  const userId = req.session.userid;
  user
    .destroy({
      where: {
        id: userId,
      },
    })
    .then(result => {
      if (result === 1) {
        res.status(200).send('삭제됨');
      } else {
        res.status(404).send('');
      }
    });
});

// 1. 유저가 로그인 POST 요청 (email, password)

// 2. database 에서 요청한 정보가 일치 하는 데이터가 있는지 확인
//  true => 응답(200, session) false => 응답 (404, not found)

export default router;
