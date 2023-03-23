require("dotenv").config()
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const messageModel = require("./models/message.model");
const connect = require("./db/db.connect");

const userRoute=require("./routes/user.routes")
const postRoute=require("./routes/post.routes")
// Configure middleware
app.use(express.json());
app.use(cors());

app.use("/user",userRoute)
app.use("/post",postRoute)
// Handle socket.io connections
const activeusers=new Map()
io.on('connection', (socket) => {
  console.log('Socket connected:', activeusers);
  let userid=socket.request._query.userid
  activeusers.set(userid,socket.id)
  io.emit("user_connected",userid)
  socket.on('newMessage', async ({ sender, recipient, message }) => {
    try {
      // const newMessage = new messageModel({ sender, recipient, message });
      // await newMessage.save();
      console.log("yes")
      recipient=activeusers.get(recipient)
      socket.to(recipient).emit('newMessage', newMessage);
    } catch (err) {
      console.error(err);
    }
  });
  socket.on('likePost', (postId) => {
    // Handle likePost event here
  });

  // Disconnect socket
  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
    let userid=socket.request._query.userid
    activeusers.delete(userid)
  io.emit("user_disconnected",userid)
  });
});

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, async() => {
    await connect()
    console.log(`Server started on port ${PORT}`)
});
