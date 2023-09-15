const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute.js");
const messagesRoute = require("./routes/messagesRoute.js");
const socket = require("socket.io");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth/", userRoute);
app.use("/api/messages", messagesRoute);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db working fine man");
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`it is working on port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: process.env.ORIGIN,
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
