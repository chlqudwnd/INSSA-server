import express from 'express';
import storage from '../data/storage';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(`server received GET req from ip: ${req.ip}`);
  res.json(storage);
});

router.post('/', (req, res) => {
  const reqData = req.body;
  console.log(`server received POST req from ip: ${req.ip}. data is ${reqData}`);
  storage.data.push(reqData as string);
  res.json(reqData);
});

export default router;

//!                   collection   member
//! get : retrieve     /users    /users/id
//! post: create       /users
//! patch:update       /users    /users/id
//! delete:remove      /users    /users/id

//! login (create session)
//! logout (delete session)

//! post   /sessions
//! delete  /sessions/id

//! /clubs , /clubs/id
//! /clubs/clubId/comments/commentId
//! /comments/commentId

//! /users/id/wall/comments
//! /users/id/post/commnets
//! *** Polymorphism ***
//! wall, post, club => "commentable" => implement
//! commentable:
//!   comments: Comment[]
//! Comment:
//!   resourceType: T extends Commentable
//!   resourceId: T['id'] (T extends Commentable)
//!   commenteeType: S extends Commentee
//!   commenteeId: S['id'] (S extends Commentee)
//! users => "commentee"
//! bots => "commentee"

//! post /comments {
//!   resourceType: 'club'
//!   resourceId: '3'
//!   userId: 3,
//!   message: 'hi im gosu'
//! }
//! post /clubs/clubId/comments {
//!   userId: 3,
//!   message: 'hi im gosu'
//! }
