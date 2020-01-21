import express from 'express';
import { decryptId } from '../config/decryptId';
import { User } from '../data/entity/User';
import { Club } from '../data/entity/Club';
import { Board } from '../data/entity/Board';

const router = express.Router();

// mypage 정보 요청 내 정보, 나의 취미, 내가 가입한 동호회, 내가 쓴 게시글
router.get('/', async (req, res) => {
  const userId = await decryptId(req);
  const user = await User.findOne({ where: { id: userId }, relations: ['hobbys', 'comments', 'ownedClubs'] });
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
