import express from 'express';
import { Hobby } from '../data/entity/Hobby';
// import { User } from '../data/entity/User';
// import jwt from 'jsonwebtoken';
// import secret from '../config/jwt';
// import { User } from '../data/entity/User'

const router = express.Router();

//나의 취미 가져오기 요청
// router.get('/', (req, res) => {});
//나의 취미 저장 요청
router.post('/', async (req, res) => {
  const { hobby } = req.body;
  // const token = req.cookies.token;
  // const getUser = Object.values(jwt.verify(token, secret))[0];
  const hobbys = '';
  hobby.map((num: number) => {
    Hobby.find({ id: num }).then(result => {
      hobbys + result;
      console.log(hobbys);
      res.send();
    });
  });
});

//나의 취미 수정 요청
// router.patch('/', (req, res) => {});

//나의 취미 삭제 요청
// router.delete('/', (req, res) => {});

export default router;
