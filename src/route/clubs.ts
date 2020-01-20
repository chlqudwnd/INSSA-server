import express from 'express';
import { Club } from '../data/entity/Club';
import { Hobby } from '../data/entity/Hobby';
import { User } from '../data/entity/User';
import jwt from 'jsonwebtoken';
import secret from '../config/jwt';
import { LessThan } from 'typeorm';

const router = express.Router();

router.use('*', (req, res, next) => {
  // 토큰 만료 경우 로그인 요청
  const token = req.cookies.token;
  if (token) {
    next();
  } else {
    res.status(400).send('토큰 만료 다시 로그인 해주세요');
  }
});

// //동호회 메인 페이지 get 요청
router.get('/', async (req, res) => {
  const clubs = await Club.find({ relations: ['host', 'hobby'] });
  console.log(clubs);
  const resData = clubs.map(item => {
    const { id, name, host, hobby } = item;
    return {
      id,
      name,
      hobbyName: hobby.name,
      hostName: host.name,
    };
  });
  res.send(resData);
});

// 동호회 생성 post 요청
router.post('/', async (req, res) => {
  const { name, field, status, max, hobbyId } = req.body;
  const token = req.cookies.token;
  const decryptId = Object.values(jwt.verify(token, secret))[0];
  const host = await User.find({ where: { id: decryptId } });
  const findHobby = await Hobby.find({ where: { id: hobbyId } });
  const checkClubName = await Club.findOne({ where: { name: name } });
  console.log('clubname', checkClubName);
  if (checkClubName) {
    res.status(409).send('이미 존재하는 동호회 이름 입니다');
    return;
  }
  const newClub = new Club();
  newClub.name = name;
  newClub.field = field;
  newClub.status = status;
  newClub.max = max;
  newClub.host = host[0];
  newClub.hobby = findHobby[0];
  newClub.users = [host[0]];
  Club.save(newClub);
  res.status(201).send(newClub);
});

// //동호회 폐쇠 delete 요청
router.delete('/', async (req, res) => {
  const { clubId } = req.body;
  const token = req.cookies.token;
  const decryptId = Object.values(jwt.verify(token, secret))[0];
  const result = await Club.delete({ id: clubId, host: decryptId });
  if (result.affected === 1) {
    res.status(200).send('삭제 완료');
  } else {
    res.status(400).send('접근 권한이 없습니다');
  }
});

//동호회 정보 변경 patch 요청
router.patch('/', async (req, res) => {
  const { clubId, hobbyId, name, max, field } = req.body;
  const findClub = await Club.findOne({ where: { name: name, id: LessThan(clubId) } });
  const hobby = await Hobby.findOne({ id: hobbyId });
  console.log(findClub);
  if (findClub) {
    res.send('중복된 동호회 이름입니다');
    return;
  }
  Club.update({ id: clubId }, { id: clubId, name: name, max: max, field: field, hobby: hobby });
  res.send('수정 완료!');
});

// //
// router.get('/page/:id');

// router.get('/join');

// router.delete('/drop');

export default router;
