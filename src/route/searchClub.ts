import express from 'express';
import { Club } from '../data/entity/Club';
import { Like } from 'typeorm';
//검색한 키워드에 따라 클럽 name, hobby 를 기준으로 결과를 뽑아냄

const router = express.Router();

router.post('/', async (req, res) => {
  const { keyword } = req.body;
  const getClubs = await Club.find({ where: [{ name: Like(`%${keyword}%`) }, { status: Like(`%${keyword}%`) }] });
  if (getClubs) {
    res.status(200).send(getClubs);
  } else {
    res.status(404).send('not found');
  }
});

export default router;
