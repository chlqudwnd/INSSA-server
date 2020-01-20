import express from 'express';
import { Comment } from '../data/entity/Comment';
import { Board } from '../data/entity/Board';
import { User } from '../data/entity/User';
import { decryptId } from '../config/decryptId';
const router = express.Router();

router.use('*', (req, res, next) => {
  // 토큰 만료 경우 로그인 요청
  const token = req.cookies.token;
  if (token) {
    next();
  } else {
    res.status(400).send('토큰 만료 다시 로그인 해주세요');
  }
});

// // commentList get 요청

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const board = await Board.find({ id: Number(id) });
  if (!board.length) {
    res.status(404).send('존재하지 않은 게시물 입니다');
    return;
  }
  const comments = await Comment.find({ board: board[0] });
  console.log(comments);
  res.status(200).send(comments);
});

// comment post 요청

router.post('/:id', async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  const userId = await decryptId(req);
  const user = await User.find({ id: userId });
  const board = await Board.find({ id: Number(id) });
  if (!board.length) {
    res.status(404).send('존재하지 않은 게시물 입니다!');
  } else {
    const newComment = new Comment();
    newComment.text = text;
    newComment.user = user[0];
    newComment.board = board[0];
    const result = await Comment.save(newComment);
    console.log(result);
    res.send(result);
  }
});

// comment patch 요청

router.patch('/:id', async (req, res) => {
  const { text, commentId } = req.body;
  const { id } = req.params;
  const userId = await decryptId(req);
  const user = await User.find({ id: userId });
  const board = await Board.find({ id: Number(id) });
  const editComment = await Comment.update({ id: commentId, user: user[0], board: board[0] }, { text: text });
  const changed = editComment.raw.changedRows;
  if (changed) {
    res.status(200).send(editComment);
  } else {
    res.status(401).send('접근 권한이 없습니다!');
  }
});

// comment delete 요청

router.delete('/:id', async (req, res) => {
  const { commentId } = req.body;
  const { id } = req.params;
  const board = await Board.find({ id: Number(id) });
  if (!board.length) {
    res.status(401).send('잘못된 요청입니다');
    return;
  }
  const userId = await decryptId(req);
  const user = await User.find({ id: userId });
  const result = await Comment.delete({ id: commentId, user: user[0], board: board[0] });
  if (result.affected) {
    res.status(201).send('삭제 완료');
  } else {
    res.status(401).send('접근 권한이 없습니다');
  }
});

export default router;
