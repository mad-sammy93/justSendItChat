import express from 'express';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

const server = createServer(app);
const io = new Server(server);

// app.use(cors({
//   origin: 'http://localhost:5150',
//   methods: ['GET', 'POST'],
//   credentials: true
// }));

const currentDirectory = new URL('.', import.meta.url).pathname;
const socketsConnected = new Set();

app.get('/', (req, res) => {
  res.sendFile(join(currentDirectory, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socketsConnected.add(socket.id);
  io.emit('clients-total', socketsConnected.size);

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id);
    socketsConnected.delete(socket.id);
    io.emit('clients-total', socketsConnected.size);
  });

  socket.on('message',(data) => {
    console.log(data);
    socket.broadcast.emit('broadcast-message',data) 
  })

});

server.listen(5050, () => {
  console.log('Server is running on port 5050');
});