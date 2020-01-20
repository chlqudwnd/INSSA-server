import express from 'express';
import { User } from '../data/entity/User';
import { Session } from '../data/entity/Session';
import jwt from 'jsonwebtoken';
import secret from '../config/jwt';
import { encrypt } from '../config/encrypt';
const router = express.Router();

//현재 접속중인 사용자 요청

router.get('/', async (req, res) => {
  const getOnlineUsers = await Session.find();
  if (getOnlineUsers.length) {
    res.status(200).send(getOnlineUsers);
  } else {
    res.status(404).send('not found');
  }
});

// 로그인 요청을 보낸 사용자 처리
router.post('/', async (req, res) => {
  const { id, password } = req.body;
  const token = jwt.sign({ id: id }, secret, { expiresIn: '1w' });
  const newPassword = await encrypt(password);
  Session.delete({ user: id });
  const login = await User.findOne({ id: id, password: newPassword });
  if (login) {
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 9000000),
    });
    const newSession = new Session();
    newSession.id = token;
    newSession.user = id;
    await Session.save(newSession);
    res.status(200).send(`Welcome ${login.id} !`);
  } else {
    res.status(404).send('입력하신 정보가 일치하지 않습니다!');
  }
});
// 로그아웃 요청을 보낸 사용자 처리
router.delete('/', async (req, res) => {
  const token = req.cookies.token;
  res.clearCookie('token');
  const logout = await Session.delete({ id: token });
  console.log(logout);
  if (logout.affected) {
    res.status(200).send('bye bye');
  } else {
    res.status(400).send('bed request');
  }
});

export default router;
