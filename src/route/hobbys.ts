import express from 'express';
import { Hobby } from '../data/entity/Hobby';
import { User } from '../data/entity/User';
import jwt from 'jsonwebtoken';
import secret from '../config/jwt';

const router = express.Router();

//취미 가져오기 요청
router.get('/', async (req, res) => {
  const hobbys = await Hobby.find();
  if (hobbys.length) {
    res.status(200).send(hobbys);
  } else {
    res.status(404).send('not found');
  }
});

//취미 저장 요청
router.post('/', async (req, res) => {
  const { name } = req.body;
  const hobby = await Hobby.find({ name: name });
  // const token = req.cookies.token
  // const userId = Object.values(jwt.verify(token, secret))[0]
  // const user = await User.find({id:userId})
  if (hobby.length) {
    res.status(400).send('등록 하시려는 취미기 저장 되어있습니다');
    return;
  }
  const newHobby = new Hobby();
  newHobby.name = name;
  // newHobby.users = user
  const result = await Hobby.save(newHobby);
  res.status(201).send(result);
});

//취미 수정 요청
router.patch('/', async (req, res) => {
  const { id, name } = req.body;
  const alredyHobby = await Hobby.findOne({ name: name });
  if (alredyHobby) {
    res.status(400).send(`이미 저장된 취미 입니다! id:${alredyHobby.id}`);
    return;
  }
  const hobby = await Hobby.update({ id: id }, { name: name });
  console.log(hobby);
  res.send(hobby);
});

//취미 삭제 요청
router.delete('/', async (req, res) => {
  const { id } = req.body;
  const hobby = await Hobby.delete({ id: id });
  if (!hobby.affected) {
    res.status(400).send('정보가 일치하지 않습니다');
    return;
  }
  res.send(hobby);
});

export default router;
