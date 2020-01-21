import express from 'express';
import { User } from '../data/entity/User';
import { decryptId } from '../config/decryptId';
import { encrypt } from '../config/encryptId';
import { Hobby } from '../data/entity/Hobby';
const router = express.Router();

router.use((req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    next();
  } else {
    res.status(400).send('토큰 만료 다시 로그인 해주세요');
  }
});

// signup
router.post('/', async (req, res) => {
  const { id, password, name, phone, address, gender, birth, type, hobbies } = req.body;
  const finduser = await User.findOne({ id: id });
  if (finduser) {
    res.status(409).send('아이디 중복');
    return;
  }
  const newPassword = await encrypt(password);
  const newUser = new User();
  newUser.id = id;
  newUser.password = newPassword;
  newUser.name = name;
  newUser.phone = phone;
  newUser.address = address;
  newUser.gender = gender;
  newUser.birth = birth;
  newUser.type = 'true';
  await User.save(newUser);
  const user = await User.findOne({ where: { id: id }, relations: ['hobbies'] });
  hobbies.map(async (id: number) => {
    const info = await Hobby.findOne({ id: id });
    if (user && info) {
      user.hobbies.push(info);
      User.save(user);
    }
  });
  res.status(201).send(`환영합니다 ${id} 님!`);
});

// //나의 정보 보기 요청
router.get('/', async (req, res) => {
  const userId = await decryptId(req);
  if (!userId) {
    res.send('잘못된 요청입니다');
  }
  const users = await User.find({ id: userId });
  const resData =
    users.length &&
    users.map(item => {
      const { id, name, address, gender, phone } = item;
      return {
        id,
        name,
        address,
        gender,
        phone,
      };
    });
  res.status(200).send(resData);
});

// // 회원 정보 수정 요청

router.patch('/', async (req, res) => {
  const { name, phone, address } = req.body;
  const userId = await decryptId(req);
  const findUser = await User.findOne({ phone: phone });
  console.log('finduser', findUser);
  const user = !findUser && (await User.update({ id: userId }, { name: name, phone: phone, address: address }));
  console.log('user', user);
  if (user) {
    res.status(201).send(user);
  } else {
    res.status(409).send('휴대폰 번호를 정확히 입력하세요');
  }
});

//회원 탈퇴 요청
router.delete('/', async (req, res) => {
  const userId = await decryptId(req);
  const deleteUser =
    userId &&
    (await User.update(
      { id: userId },
      {
        /*status:"d"*/
      },
    ));
  if (deleteUser.affected) {
    res.status(200).send('탈퇴');
  } else {
    res.status(404).send('not found');
  }
});

// 1. 유저가 로그인 POST 요청 (email, password)

// 2. database 에서 요청한 정보가 일치 하는 데이터가 있는지 확인
//  true => 응답(200, session) false => 응답 (404, not found)

export default router;
