import http from 'http';

import app from './app';
import attachSocket from './socket/attachSocket';

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

attachSocket(server);

server.listen(PORT, () => {
  console.log(`app listen on ${PORT}`);
});

export default server;
