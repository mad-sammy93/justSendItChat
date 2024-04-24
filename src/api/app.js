
// const express= require('express')
// const path = require('path')
// const app = express()
// const PORT = process.env.PORT || 4000
// const server  = app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))

// const io = require('socket.io')(server)

// app.use(express.static(path.join(__dirname, 'public')))

// // io.on('connection', (socket) => {
// //   console.log(socket.id);
// //   socket.on('message', (message) => {
// //     io.emit('message', message)
// //   })
// // })

// io.on('connection',onConnected)

// const onConnected = (socket) => {
//   console.log(socket.id);
//   socketsConnected.add(socket.id)
//   io.emit('Clients Total', socketsConnected.size)

//   socket.on('disconnect', () => {
//     console.log('disconnected', socket.id)
//     socketsConnected.delete(socket.id)
//     io.emit('Clients Total', socketsConnected.size)
//   })
// }
import express from 'express';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const currentDirectory = new URL('.', import.meta.url).pathname;
const socketsConnected = new Set();

app.get('/', (req, res) => {
  res.sendFile(join(currentDirectory, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  console.log(socket.id);
  socketsConnected.add(socket.id);
  io.emit('Clients Total', socketsConnected.size);

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id);
    socketsConnected.delete(socket.id);
    io.emit('Clients Total', socketsConnected.size);
  });
});

server.listen(5050, () => {
  console.log('Server is running on port 5050');
});