const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

//set up socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

//start writing socket.io code 
//has real time connection and disconnection in our console! cool!
io.on('connection', (socket) => {
    console.log('WE HAVE A NEW CONNECTION!!');

    socket.on('disconnect', () => {
        console.log('user left :(');
    })
})

app.use(router);

//run our server
server.listen(PORT, () => console.log(`server is running on port ${PORT} uwu`));