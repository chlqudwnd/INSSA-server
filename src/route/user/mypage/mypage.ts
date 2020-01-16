import express from 'express';

const router = express.Router();

router.get('/');

router.get('/hobbyList');

router.get('/clubList');

router.post('/deleteUser');

export default router;
