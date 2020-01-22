import express from 'express';
import { decryptId } from '../config/decryptId';
import { User } from '../data/entity/User';
import { Club } from '../data/entity/Club';
import { Board } from '../data/entity/Board';

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

// mypage 정보 요청 내 정보, 나의 취미, 내가 가입한 동호회, 내가 쓴 게시글
router.get('/', async (req, res) => {
  const userId = await decryptId(req);
  const user = await User.findOne({ where: { id: userId }, relations: ['hobbies', 'comments', 'ownedClubs'] });
  const clubs = user && (await Club.find({ relations: ['users'] }));
  const boards = Board.find({ user: user });
  if (user && clubs && boards) {
    const resData = { user, clubs, boards };
    res.send(resData);
  }
});

// router.post('/', (req,res)=>{

// })

export default router;
