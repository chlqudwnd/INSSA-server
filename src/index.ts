import 'reflect-metadata';
import http from 'http';

import api from './api';
import attachSocket from './socket/attachSocket';
import data from './data';

const PORT = process.env.PORT || 8080;

const server = http.createServer(api);

attachSocket(server);

server.listen(PORT, () => {
  console.log(`app listen on ${PORT}`);
});

data.getConnection().then(async connection => {
  console.log(`user: ${await connection.getRepository('User').count()}`);
});

export default server;
