const connectToMongo=require('./db.js');
connectToMongo();
const Message = require("./Message");
const express = require('express');
var cors=require('cors');
const http = require('http')
const  mongoose  = require('mongoose');
const { Server } = require("socket.io");
const app = express();
const port = 3100;

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(express.json())
// app.use('/api/auth',require('./routes/auth'))
 app.use('/api/developer',require('./routes/developer'))

//for chat

const CHAT_BOT = "ChatBot";
let chatRoom = "";
let allUsers = [];

io.on('connection',(socket)=>{
  console.log(`user connected ${socket.id}`);

  socket.on('join_room',(data)=>{
    const { username, room } = data;
    console.log(room+" is joined");
    socket.join(room);
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_ucd sers", chatRoomUsers);

    Message.find({ room: room })
    .then((foundItems) => {
        console.log(JSON.stringify(foundItems));
        socket.emit('lastMessages', foundItems);
    })
    .catch((err) => {
      console.log(err);
    });

    let __createdtime__ = Date.now();
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat`,
      username: CHAT_BOT,
      __createdtime__,
    });

    socket.emit("receive_message", {
      message: `Welcome ${username}`,
      username: CHAT_BOT,
      __createdtime__,
    });
  })

  socket.on("disconnect", () => {
    console.log("User disconnected from the chat");
    const user = allUsers.find((user) => user.id == socket.id);
    if (user?.username) {
      allUsers = leaveRoom(socket.id, allUsers);
      socket.to(chatRoom).emit("chatroom_users", allUsers);
      socket.to(chatRoom).emit("receive_message", {
        message: `${user.username} has disconnected from the chat.`,
      });
    }
  });

  socket.on("send_message", (data) => {
    const { message, username, room, __createdtime__ } = data;
    io.in(room).emit("receive_message", data); // Send to all users in room, including sender

    const sendAway = new Message({
      username: username,
      message: message,
      room: room,
      time:__createdtime__,
    });
    sendAway
      .save()
      .then(function (doc) {
        console.log(doc._id.toString());
      })
      .catch(function (error) {
        console.log(error);
      });
  });

});


app.listen(port, () => {
 console.log(`inotebbok backend app listening at http://localhost:${port}`);
});
server.listen(4000, () => "server listening on port 4000");
