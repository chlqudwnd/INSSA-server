import express from 'express';
import { Club } from '../data/entity/Club';
import { Hobby } from '../data/entity/Hobby';
import { User } from '../data/entity/User';
import { LessThan } from 'typeorm';
import { decryptId } from '../config/decryptId';

const router = express.Router();

router.use((req, res, next) => {
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
  const userId = await decryptId(req);
  const user = await User.findOne({ where: { id: userId }, relations: ['hobbies'] });
  const allClubs = await Club.find();
  const club = await Club.find({ relations: ['host', 'hobby'] });
  if (user) {
    const clubs = user.hobbies.map(item => {
      return club.filter(club => item.name === club.hobby.name);
    });
    const resData =
      club &&
      clubs.map(item => {
        const { id, name, host, hobby } = item[0];
        return {
          id,
          name,
          hobbyName: hobby.name,
          hostName: host.name,
        };
      });
    if (resData.length || allClubs.length) {
      res.status(200).send({ hobbiesEqualClubs: resData, allClubs });
    } else {
      res.status(404).send('not found');
    }
  }
});

// 동호회 생성 post 요청
router.post('/', async (req, res) => {
  const { name, field, status, max, hobbyId } = req.body;
  const userId = await decryptId(req);
  const host = await User.find({ where: { id: userId } });
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
  const result = await Club.save(newClub);
  res.status(201).send(result);
});

// //동호회 폐쇠 delete 요청
router.delete('/', async (req, res) => {
  const { clubId } = req.body;
  const userId = await decryptId(req);
  const result = await Club.delete({ id: clubId, host: userId });
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

//동호회 가입 요청

router.post('/join', async (req, res) => {
  const { clubId } = req.body;
  const userId = await decryptId(req);
  const user = await User.findOne({ where: { id: userId }, relations: ['clubs'] });
  const club = await Club.findOne({ where: { id: clubId }, relations: ['users'] });
  if (user && club) {
    club.users.map(item => {
      if (user.id === item.id) {
        res.status(400).send('이미 가입 되어 있습니다!');
        return;
      }
    });
    club.users.push(user);
    Club.save(club);
    res.status(200).send('가입 완료!');
  } else {
    res.status(401).send('잘못된 요청 입니다');
  }
});

//동호회 탈퇴 요청

router.delete('/out', async (req, res) => {
  const { clubId } = req.body;
  const userId = await decryptId(req);
  const user = await User.findOne({ id: userId });
  const club = await Club.findOne({ where: { id: clubId }, relations: ['users'] });
  if (user && club) {
    club.users.map((item, index) => {
      const num = index ? index : 1;
      if (user.id === item.id) {
        club.users.splice(index, num);
        Club.save(club);
        res.status(400).send('탈퇴 완료!');
        return;
      }
    });
    res.status(200).send('가입되어 있지 않습니다!');
  } else {
    res.status(401).send('잘못된 요청 입니다');
  }
});

export default router;
