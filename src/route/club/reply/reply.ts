import express from 'express';

const router = express.Router();

router.get('/');

router.post('/add');

router.post('/edit');

router.get('/delete');

export default router;
