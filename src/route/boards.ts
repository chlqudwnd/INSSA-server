import express from 'express';
import { Board } from '../data/entity/Board';
import { Club } from '../data/entity/Club';
import { User } from '../data/entity/User'
import jwt from 'jsonwebtoken';
import secret from '../config/jwt';

const router = express.Router();

//동호회 게시판 데이터를 get 요청

router.get('/:id',async (req,res)=>{
  const { id } = req.params
  const club = await Club.findOne({id:Number(id)})
  const board = await Board.find({club:club})
  console.log(board)
  if(board.length){
    res.status(200).send(board)
  } else {
    res.status(404).send("not found")
  }

})

//동호회 게시판 clubId로 board로 post 요청

router.post('/:id',async (req, res) => {
  const {title, category, text } = req.body;
  const { id } = req.params
  const token = req.cookies.token
  const userId = Object.values(jwt.verify(token, secret))[0]
  const user = await User.find({id:userId})
  const club = await Club.find({where:{id:id}})
  const newBoard = new Board()
  newBoard.title = title
  newBoard.category = category
  newBoard.text = text
  newBoard.club = club[0]
  newBoard.user = user[0]
  const result = await Board.save(newBoard)
  console.log(result)
  res.send("저장 완료")
});

//patch 요청

router.patch('/:id',async (req,res)=>{
  const { boardId, title, category, text } =req.body;
  const { id } = req.params
  const token = req.cookies.token
  const userId = Object.values(jwt.verify(token, secret))[0]
  const club = await Club.findOne({id:Number(id)})
  const user = await User.findOne({id:userId})
  const editboard = await Board.update({id:boardId, user:user, club:club},{id:boardId,title:title, category:category, text:text})
  const changed = editboard.raw.changedRows
  if(changed){
    res.send(editboard)
  } else {
    res.send("접근 권한 없음")
  }
  // changed && res.send(editboard)
  // !changed && res.send("접근 권한 없음")
})

//게시글 delete 요청

router.delete('/:id',async (req,res)=>{
  const { id } = req.params
  const { boardId } = req.body
  const token = req.cookies.token
  const userId = Object.values(jwt.verify(token, secret))[0]
  const user = await User.findOne({id:userId})
  const club = await Club.findOne({id: Number(id)})
  const deleteBoard = await Board.delete({id:boardId, club:club, user:user})
  if(deleteBoard.affected){
    res.send(deleteBoard)
  } else {
    res.send("접근 권한 없음")
  }
})


export default router;
