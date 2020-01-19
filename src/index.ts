import 'reflect-metadata';
import http from 'http';

import api from './api';
import attachSocket from './socket/attachSocket';
import data from './data';

import { User } from './data/entity/User';
import { Hobby } from './data/entity/Hobby';
import { Club } from './data/entity/Club';
import { Board } from './data/entity/Board';
import { Comment } from './data/entity/Comment';

const PORT = process.env.PORT || 8080;

const server = http.createServer(api);

attachSocket(server);

server.listen(PORT, () => {
  console.log(`app listen on ${PORT}`);
});

data
  .getConnection()
  .then(async connection => {
    const userRepository = connection.getRepository(User);
    const hobbyRepository = connection.getRepository(Hobby);
    const clubRepository = connection.getRepository(Club);
    const boardRepository = connection.getRepository(Board);
    const commentRepository = connection.getRepository(Comment);

    const hobby = new Hobby();
    hobby.name = 'test hobby';

    const testHobby = await hobbyRepository.save(hobby);

    const user = new User();
    user.id = 'test@test.com';
    user.name = 'test name';
    user.address = 'sample address';
    user.birth = new Date();
    user.gender = 'Male';
    user.password = '1234';
    user.type = 'test type';
    user.phone = '023-4567-6788';
    user.hobbys = [testHobby];

    const testUser = await userRepository.save(user);
    console.log(`user: ${await userRepository.count()}`);

    const club = new Club();
    club.name = 'test club';
    club.field = 'test field';
    club.status = 'test status';
    club.max = 10;
    club.host = testUser;
    club.hobby = testHobby;
    club.users = [testUser];

    const testClub = await clubRepository.save(club);

    const board = new Board();
    board.title = 'test board title';
    board.text = 'test board text';
    board.category = 'test board category';
    board.club = testClub;
    board.user = testUser;

    const testBoard = await boardRepository.save(board);

    const comment = new Comment();
    comment.text = 'test comment text';
    comment.user = testUser;
    comment.board = testBoard;

    const testComment = await commentRepository.save(comment);

    // console.log(testUser);
    // console.log(testHobby);
    // console.log(testClub);
    // console.log(testBoard);
    // console.log(testComment);

    const asd = await userRepository.findOne('test@test.com', { relations: ['comments'] });
    console.log(asd);
    return;
  })
  .catch(err => {
    console.error(err);
  });

export default server;
