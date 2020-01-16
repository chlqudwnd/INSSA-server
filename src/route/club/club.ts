import express from 'express';
import replyRouter from './reply/reply';

const router = express.Router();

router.post('/create');

router.get('/deleteClub');

router.get('/join');

router.get('/mainpage');

router.get('/page');

router.get('/drop');

router.use('/reply', replyRouter);

export default router;
