// server/express.js
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
// import cors from "cors";
// const cOps = {
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
// }

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on('connection', (socket) => {
  console.log(`A user connected ${socket}`);
  
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
  
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});